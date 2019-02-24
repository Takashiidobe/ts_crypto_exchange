import connectionString from '../config/connectionString';

const knex = require('knex')({
  client: 'pg',
  connection: `${connectionString}?ssl=true`,
});

export default knex;