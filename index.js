const express = require('express');
const app = express();
const port = 3000;
const Furminator = require('./Furminator');
const hackNSA = require('./MrRobot');

app.get('/hello-world', function(req, res) {
  const furminator = new Furminator();
  const body = furminator.getFact();

  body.then((body) => {
    res.send(body.text);
  });
});

app.get('/hackNSA', async function(req, res) {
  const furminator = new Furminator();
  const { password } = await hackNSA();
  const { text } = await furminator.getFact();
  res.send({
    password,
    text,
  });
});


app.listen(port, function() {
  console.log('server started');
});