const fetch = require('node-fetch');

class Furminator {
  constructor() {
    this.url = "https://cat-fact.herokuapp.com/facts/random";
  }

  getFact() {
    return fetch(this.url)
      .then(res => {
        return res.json();
      })
      .then(body => {
        return body;
      });
  }
}

module.exports = Furminator;