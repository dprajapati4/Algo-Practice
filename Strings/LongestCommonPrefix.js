// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

// Brute Force Approach: Use a nested loop, iterate over the first string in the array, and compare that first string to every other string in the strings array, letter by letter. If you encounter a mismatch, return the substring until that point. By default return the entire first string of the array, this means no mismatches were ever encountered and the first string is a prefix for all strings in the array.

const longestCommonPrefixBF = (strs) => {
  if (strs)
    for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (strs[0][i] !== strs[j][i]) {
          return strs[0].substr(0, i);
        }
      }
    }
  // EC:If you never encounter a mismatch where, strs[0][i] !== strs[j][i], it means you don't return anything. So to handle that and ECs of an empty string or just one string, we simply return the first item in the strs array by default.
  return strs[0];
};

// BigO
// Time Complexity: O(n * m) where n is the number of strings in strs and m is the length of the first string.
// Space Complexity: O(1) because we are only creating new constants.

// Approach: Sort the array, this will order the strings by length and in order of letters ([club, clap, clove] ---> [clap, clove, club]). Once sorted, you can compare the first and smallest string to the last and longest string. Concat each matching letter to the growing result string and return that at the end.

const longestCommonPrefixSorted = function (strs) {
  let result = "";

  let sorted = strs.sort();
  const firstStr = sorted[0];
  const lastStr = sorted[sorted.length - 1];

  for (let i = 0; i < firstStr.length; i++) {
    // We don't set this to firstStr[i] === lastStr[i], because that wont account for empty or one string in the array edge cases.
    if (firstStr[i] !== lastStr[i]) {
      break;
    }

    result = result + firstStr[i];
  }
  return result;
};

// BigO
// Time Complexity: O(n log n) because we sort the array and the fasted sort algo, quicksort, has the time complexity is n log n.
// Space Complexity: O(1) because we are only creating new constants.

// Approach: Find the smallest string, the largest prefix can only be as large as the smallest string. Use the first string as a template and iterate over it until the min string length. Than compare each letter of the first string to the first letter of all the other strings.

var longestCommonPrefixMinString = function (strs) {
  let minStrLength = Infinity;
  let index = 0;

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minStrLength) {
      minStrLength = strs[i].length;
    }
  }

  while (index < minStrLength) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[0][index] !== strs[i][index]) {
        return strs[0].substr(0, index);
      }
    }
    index++;
  }
  return strs[0].substr(0, minStrLength);
};

// BigO
// Time Complexity: O(n * m) where n is the number of strings in strs and m is the length of the the min string length.
// Space Complexity: O(1) because we are only creating new constants.
