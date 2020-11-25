const jwt = require('jsonwebtoken');
const config = require('../config/config');

const publicRootValue = {
  login: ({ email, password }) => {
    if(email === 'Test@test.com' && password === 'P@rOlA') {
      const token = jwt.sign({}, config.JWTSECRET);
      return {
        token,
      };
    } else {
      return null;
    }
  }
};

module.exports = publicRootValue;