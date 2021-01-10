const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] != [${expected}]`);
  }
};

const findKey = function (object, callback) {
  output = undefined
  for (const key in object) {
    if (callback(object[key])) {
      output = key;
      break;
    }
  }
  return output
};

assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 3 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma") // => "noma"


