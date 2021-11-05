const { response } = require('express');
const pool = require('./../libs/postgres-pool');

class UsersService {
  constructor(){
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async create(data){
    return data;
  }

  async find(){
    const query = 'Select * from task';
    const response = await this.pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id) {
    return { id };
  }
  
  async delete(id) {
    return { id };
  }

}

module.exports = UsersService;