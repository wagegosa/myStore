const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
// carrito
router.get('/', (req, res) =>{
  const pago = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    pago.push({
      name: faker.person.fullName(),
      user: faker.internet.email(),
      product: {
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
      }
    })
  }
  res.json(pago);
});
router.get('/:pagoId', (req, res) => {
  const pago = [];
  const { categoriasId } = req.params;
  pago.push({
    id: categoriasId,
    name: faker.person.fullName(),
    user: faker.internet.email(),
    product: {
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
    }
  })
   res.json(pago);
})

module.exports = router;
