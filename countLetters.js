const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] != [${expected}]`);
  }
};

const countLetters = function (string, stringToCount) {
  const output = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));
