const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');
const userType = require('./userType');

const postType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    author: { 
      type: userType,
      resolve: async (parent) => {
        return await parent.getUser();
      }
    },
    body: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }
});

module.exports = postType;