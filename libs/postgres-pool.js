const { Pool } = require('pg');

  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'cart',
    password: 'Abrir.01',
    database: 'sales_cart'
  });
  

module.exports = pool;
