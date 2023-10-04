const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
// carrito
router.get('/', (req, res) =>{
  const category = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    category.push({
      name: faker.commerce.productName(),
      product: {
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.url(),
      }
    })
  }
  res.json(category);
});
router.get('/:carritoId', (req, res) => {
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

module.exports = router;
