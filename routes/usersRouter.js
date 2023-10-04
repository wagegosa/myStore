const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
// Usuarios
router.get('/', (req, res) =>{
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.person.fullName(),
      user: faker.internet.email(),
      avatar: faker.image.avatar()
    })
  }
  res.json(users)
});
router.get('/user', (req, res) => {
const { limit, offset} = req.query;
  if (limit && offset) {
     res.json({
      limit,
      offset
     });
  } else {
    res.send('No se encontraron datos con los parametron indicados.');
  }
});

module.exports = router;
