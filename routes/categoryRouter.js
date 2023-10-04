const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
// categorias
router.get('/', (req, res) =>{
  const category = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    category.push({
      name: faker.company.name(),
      product: {
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.url(),
      }
    })
  }
  res.json(category);
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
