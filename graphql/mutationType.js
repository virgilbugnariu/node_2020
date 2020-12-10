const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql');
const models = require('../models');
const postType = require('./types/postType');
const postInputType = require('./inputTypes/postInputType');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createPost: {
      type: postType,
      args: {
        postInput: {
          type: GraphQLNonNull(postInputType)
        },
      },
      resolve: async (_, { postInput }, context) => {
        // `user` vine din `authenticationMiddleware`
        const { user } = context;
        
        // Daca nu exista `user` pe context inseamna ca userul nu este autentificat.
        if(!user) {
          return null;
        }

        const post = await user.createPost(postInput);

        return post;
      },
    },
    login: {
      type: GraphQLString,
      args: {
        email: {
          type: GraphQLNonNull(GraphQLString),
        },
        password: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (parent, { email, password }) => {
        const user = await models.User.findOne({
          where: {
            email,
            password,
          }
        });


        if(user) {
          // Pasam `userId` in token pentru a-l folosi la validarea tokenului (authenticationMiddleware)
          const token = jwt.sign({userId: user.id}, config.JWTSECRET);
          return token;
        }

        return null;
      },
    },
  },
});

module.exports = mutationType;