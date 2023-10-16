const express = require('express');
const productsService = require('../services/products.service');
const validatorHandler = require('../middleware/validator.hadler');
const { uctSchema, updateProductSchema, getProductSchema, createProductSchema } = require('../schemas/product.schema');

const router = express.Router();
const service = new productsService();

// porductos
router.get('/', async (req, res, next) =>{
  try {
    const product = await service.find();
    if (!product) {
      res.json({
        message: 'No se encontro registro'
      })
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    next(error);
  }
});
router.get('/filter', (req, res) =>{
  res.send('Soy un filtro');
});
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      if (!product) {
        res.json({
          message: 'No se encontro registro'
        })
      } else {
        res.status(200).json(product);
      }
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async  (req, res) => {
  try {
    const { id } = req.params;
    const rta = await  service.delete(id, body);
    res.json(rta);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

module.exports = router;
