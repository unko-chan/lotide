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
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};



const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}







// const words = ["ground", "control", "to", "major", "tom"];
// const words2 = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0])
// const results2 = map(words2, word => word[0])

// assertArraysEqual(results1, results2)