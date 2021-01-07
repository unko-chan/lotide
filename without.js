const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

const without = function (source, itemsToRemove) {
  const output = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i]))
      output.push(source[i])
    }
  console.log(output);
};



