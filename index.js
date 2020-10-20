const express = require('express');
const app = express();
const port = 3000;
const generateMessage = require('./messageGenerator');

app.get('/hello-world', async function(req, res) {
  const body = await generateMessage();
  console.log(body);
  res.send(body.text);
});

app.listen(port, function() {
  console.log('server started');
});