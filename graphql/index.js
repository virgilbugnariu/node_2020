const { GraphQLSchema } = require('graphql');
const queryType = require('./queryType');
const mutationType = require('./mutationType');

module.exports = new GraphQLSchema({
  query: queryType, 
  mutation: mutationType,
});