const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

const config = {
  JWTSECRET: 'SuperSecretKey',
};

app.use(bodyParser.json());

const authenticationMiddleware = (req, res, next) => {
  jwt.verify(req.headers.authorization, config.JWTSECRET, (err, data) => {
    if(err) {
      res.send({
        status: "crying_in_the_shower"
      }, 401);
    } else {
      next()
    }
  });
};

app.post('/login', (req, res) => {
  const { user, pass } = req.body;
  if(user === 'Gogu' && pass === 'P@rOlA') {
    jwt.sign({}, config.JWTSECRET, (err, token) => {
      if(!err) {
        res.send({
          token,
        });
      }
    })
  } else {
    res.send({ error: true }, 401);
  }
});

app.get('/graphql', authenticationMiddleware, async function(req, res) {
  res.send({
    status: "ok"
  }, 200);
});

app.get('/graphql/public', async function(req, res) {
  res.send({
    status: "ok"
  }, 200);
});


app.listen(port, function() {
  console.log('server started');
});