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

const takeUntil = function (array, callback) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) break;
    output.push(array[i]);
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
const expected = [ 1, 2, 5, 7, 2 ]
console.log(results1);

console.log('---');

const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
const results2 = takeUntil(data2, (x) => x === ',');
console.log(results2);



