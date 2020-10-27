
const hackNSA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hack finished');
      const password = 'admin';
      resolve({
        password,
      });
    }, 2000)
  });
}

module.exports = hackNSA;