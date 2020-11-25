const models = require('../models');

const resolver = {
  user: async ({ userId }) => {
    const user = await models.User.findByPk(userId);
    return user;
  },
  userProfile: async ({ userId }) => {
    const user = await models.User.findByPk(userId);
    const profile = await user.getProfile();
    return profile;
  },
  post: async ({ postId }) => {
    const post = await models.Post.findByPk(postId);
    return post;
  },
  createPost: async ({ userId, title, body }) => {
    const user = await models.User.findByPk(userId);
    const post = await user.createPost({
      title,
      body,
    });

    return post;
  }
};

module.exports = resolver;