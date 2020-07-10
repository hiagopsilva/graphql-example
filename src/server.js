const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = require('./api/schema');

const app = express();

app.use('/api', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000, () => console.log('Executando...'))