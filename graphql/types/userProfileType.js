const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const userProfileType = new GraphQLObjectType({
  name: 'UserProfile',
  fields: {
    id: { type: GraphQLInt },
    avatar: { type: GraphQLString },
    displayName: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }
});

module.exports = userProfileType;