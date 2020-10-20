const fetch = require('node-fetch');
const generateMessage = () => {
  const url = 'https://cat-fact.herokuapp.com/facts/random';
  return fetch(url)
    .then(res => {
      console.log('res', res);
      return res.json();
    })
    .then(body => {
      console.log('body', body);
      return body;
    });
};

module.exports = generateMessage;