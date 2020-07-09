const knex = require('knex');

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dir, 'src', 'database', 'database.sqlite'),
  },
  useNullAsDefault: true
})

export default connection;