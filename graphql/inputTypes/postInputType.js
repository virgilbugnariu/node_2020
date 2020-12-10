const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const postInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }
});

module.exports = postInputType;