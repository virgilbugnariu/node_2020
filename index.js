const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');
const models = require('./models');
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

app.get('/users/:userId', async function(req, res) {
  const userId = req.params.userId;
  const user = await models.User.findByPk(userId);

  res.send({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });
});


app.get('/users/:userId/profile', async function(req, res) {
  const userId = req.params.userId;
  const user = await models.User.findByPk(userId);
  const profile = await user.getProfile();

  res.send({
    email: user.email,
    profile,
  });
});

app.post('/users/:userId/post', async function(req, res) {
  const userId = req.params.userId;
  const user = await models.User.findByPk(userId);
  const post = await user.createPost({
    title: 'Title',
    body: 'Body',
  });
  
  res.send({
    status: 'ok',
  });
});

app.post('/post/:postId/tag/:tagId/associate', async (req, res) => {
  const { postId, tagId } = req.params;
  const post = await models.Post.findByPk(postId);
  const tag = await models.Tag.findByPk(tagId);
  console.log('tag', tag)
  await post.addTag(tag);
  res.send({
    status: 'ok',
  });
});

app.listen(port, function() {
  console.log('server started');
});