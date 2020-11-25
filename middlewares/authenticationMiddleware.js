const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authenticationMiddleware = (req, res, next) => {
  const token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : null;

  jwt.verify(token, config.JWTSECRET, (err, data) => {
    if(err) {
      res.send({
        status: "crying_in_the_shower"
      }, 401);
    } else {
      next()
    }
  });
};

module.exports = authenticationMiddleware;