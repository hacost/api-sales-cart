const UsersService = require('./../services/users-services');

const express = require('express');
const router = express.Router();

const service = new UsersService();
//query params
//how to use
// http://localhost:3000/users?limit=10&offset=50
router.get('/', async (req, res, next) => {
  // const { limit, offset } = req.query;
  // if (limit && offset) {
  //   res.json({
  //     limit,
  //     offset
  //   });
  // } else {
  //   res.send('No hay parametros')
  // }
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error)
  }
})

module.exports = router;
