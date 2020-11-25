const { buildSchema } = require('graphql');

const publicSchema = buildSchema(`
  type LoginSuccessful {
    token: String
  }

  type Query {
    test: String
  }

  type Mutation {
    login(email: String!, password: String!): LoginSuccessful
  }
`);

module.exports = publicSchema;