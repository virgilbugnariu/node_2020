const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const profileType = require('./userProfileType');
const models = require('../../models');

const userType = new GraphQLObjectType({
  name: 'User',
  // Pentru a evita un crash din cauza dependintei circulare
  // intre userType si userType. Declaram proprietatea `fields` 
  // sub forma de functie care returneaza obiect.
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    profile: { 
      type: profileType,
      resolve: async (parent, { userId }) => {
        return await parent.getProfile();
      }
    },
    friends: {
      type: new GraphQLList(userType),
      resolve: async () => {
        return await models.User.findAll();
      }
    },
    password: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  })
});

module.exports = userType;