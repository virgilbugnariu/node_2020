const { GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require('graphql');
const models = require('../models');
const postType = require('./types/postType');
const userType = require('./types/userType');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        userId: { 
          type: GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: async (_, { userId }) => {
        const user = await models.User.findByPk(userId);
        return user;
      }
    },
    post: {
      type: postType,
      args: {
        postId: { 
          type: GraphQLInt
        }
      },
      resolve: async (_, { postId }) => {
        const post = await models.Post.findByPk(postId);
        return post;
      }
    },
    me: {
      type: userType,
      resolve: (parent, args, context) => {
        // Returneaza userul curent
        return context.user;
      }
    }
  }
});

module.exports = queryType;