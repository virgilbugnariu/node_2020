const express = require('express');
const app = express();
const port = 3000;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./private/schema');
const resolver = require('./private/resolver');
const publicSchema = require('./public/schema');
const publicResolver = require('./public/resolver');
const authenticationMiddleware = require('./middlewares/authenticationMiddleware');

app.use('/graphql/public', graphqlHTTP({
  schema: publicSchema,
  rootValue: publicResolver,
}));

app.use('/graphql', authenticationMiddleware, graphqlHTTP({
  schema,
  rootValue: resolver,
}));

app.listen(port, function() {
  console.log('server started');
});