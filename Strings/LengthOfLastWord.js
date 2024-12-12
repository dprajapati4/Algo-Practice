// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Approach: Trim the string and than starting from the end, count the letters in a word until you encounter a space.

const lengthOfLastWord = (s) => {
  let count = 0;
  let t = s.trim();
  for (let i = t.length - 1; i >= 0; i--) {
    if (t[i] === " ") {
      return count;
    }
    count++;
  }
  return count;
};

// BigO
// Time Complexity: O(n) where n is the number of is the length of the string.
// Space Complexity: O(1) because we are only creating new constants.

// Can also do this completely with built in JS methods.

const lengthOfLastWordUsingMethods = (s) => {
  return s.trim().split(" ").pop().length;
};
