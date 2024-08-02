// Given a roman numeral, convert it to an integer.

// Approach: Use a map to store letter translation. Iterate over the string, keeping track of the current index. Compare each index to the next, if the current value is less than the next, this means its an exception, for example IV vs VI, IV means 4 and VI means 6. You can use this to simplify the problem. If the value at the current is smaller than the next, to the running sum add the difference between the larger and the smaller value and increment the current index by 2. If the next value is greater use the map to add the correct value and increment the current index by 1. Return the running sum at the end.

const romanToInt = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let runningSum = 0;
  let curr = 0;

  while (curr < s.length) {
    if (map[s[curr]] < map[s[curr + 1]]) {
      runningSum += map[s[curr + 1]] - map[s[curr]];
      curr += 2;
    } else {
      runningSum += map[s[curr]];
      curr += 1;
    }
  }
  return runningSum;
};

// BigO
// Time Complexity: O(n) because we go through all the characters in the the string once.
// Space Complexity: O(1) because even though we create an object, its length is fixed.
