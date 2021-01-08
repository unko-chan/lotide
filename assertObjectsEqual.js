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

const eqObjects = function (object1, object2) {
  const objectKeys1 = Object.keys(object1);
  const objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  for (const key of objectKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] === object2[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (actual === expected) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else if (actual !== expected) {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`
    );
  }
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true
