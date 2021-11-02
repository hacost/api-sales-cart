const express = require('express');
const router = express.Router();

//query params
//how to use
// http://localhost:3000/users?limit=10&offset=50
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros')
  }
})

module.exports = router;
