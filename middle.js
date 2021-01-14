const middle = function (array) {
  const output = [];
  const arraySplit = array.length / 2;
  const oddEven = array.length % 2;

  if (array.length > 2) {
    if (oddEven === 0) {
      output.push(array[arraySplit - 1]);
      output.push(array[arraySplit]);
    } else if (oddEven === 1) {
      output.push(array[Math.floor(arraySplit)]);
    }
  } else {
    return output;
  }
  return output
};

module.exports = middle

