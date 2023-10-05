const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
// porductos
router.get('/', (req, res) =>{
  const products = [];
  const { size } = req.query;
  const limit =size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.url(),
    });
  }
  res.json(products);
});
router.get('/filter', (req, res) =>{
  res.send('Soy un filtro');
});
router.get('/:producId', (req, res) =>{
  const { producId } = req.params;
  res.json(
    {
      producId,
      name: 'product 1',
      price: 1000
    }
  )
});

router.post('/', (req, res) => {
  const body =req.body;
   res.json({
    message: 'created',
    data: body
   });
});

module.exports = router;
