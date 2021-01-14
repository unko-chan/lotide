const assertEqual = require('./assertEqual');

const tail = function (array) {
  let lastIndex = array.slice(1);
  return lastIndex;
};


module.exports = tail;
