// Given an integer x, return true if x is a  palindrome, and false otherwise.
// Approach: Convert into a string, use two pointers, one at the end and one at the begining of the string and compare letters

const isPalindrome = (x) => {
  const str = x.toString();
  //edge case, single item and empty string = true
  if (!str.length || str.length === 1) return true;

  let left = 0;
  let right = str.length - 1;
  // while left does not pass right
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left = left + 1;
      right = right - 1;
    }
  }
  return true;
};

// Big O
// Time Complexity: O(n) because we are visiting each item in the string, n, once.
// Space: O(n) because we are creating a string with n values from the integer.
