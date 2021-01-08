const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] != [${expected}]`);
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

const eqObjects = function (object1, object2) {
  const objectKeys1 = Object.keys(object1);
  const objectKeys2 = Object.keys(object2);

  if (objectKeys1.length === objectKeys2.length) {
    for (const key of objectKeys1) {
      if (
        Array.isArray(object1[key]) === true &&
        Array.isArray(object2[key]) === true
      ) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        } else {
          return false;
        }
      } else if (object1[key] === object2[key]) {
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
