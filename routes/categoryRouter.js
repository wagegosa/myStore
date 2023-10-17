const express = require('express');
const categoriaService = require('../services/category.service');

const router = express.Router();
const service = new categoriaService();

// categorias
router.get('/', (req, res) =>{
  for (let i = 0; i < 100; i++) {
    const category = service.find();
    res.status(200).json(category);
  }
});
router.get('/:categoriasId', (req, res) => {
  const { categoriasId } = req.params;
   res.json({
    categoriasId,
    name: 'categoria 3',
    product: {
      name: 'product 1',
      brand: 'marca 3'
    }
   });
})
router.get('/:categoriasId/products/:productID', (req, res) => {
  const {categoriasId, productID } = req.params;
  res.json({
    categoriasId,
    productID
  })
});

module.exports = router;
