const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '3223225a',
      database : 'richHouse',
      insecureAuth : true
    }
  });

  module.exports = knex;