const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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


assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])

