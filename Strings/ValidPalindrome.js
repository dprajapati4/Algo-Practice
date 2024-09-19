// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.

// Approach: Use two pointers and a parsed string. Take the string and remove all non-alphanumeric characters and white spaced, and convert string to lowercase. Then compare the ends of the strings using a left and a right pointer, if the letters are the same continue moving towards the middle. If at any point the letters don't match, the string is not a palindrome and return false. If you reach the middle without any errors, return true, the string is a palindrome.

const isPalindrome = (s) => {
  if (s.length === 0) return true;
  const parsed = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // alt to not use regex -> can use a function to check const isAlphaNumeric = c => (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || c >= '0' && c <= '9'

  let left = 0;
  let right = parsed.length - 1;

  while (left < right) {
    if (parsed[left] !== parsed[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// BigO
// Time Complexity: O(n) because we go through all the elements in the string once.
// Space Complexity: O(1) because we are only creating new constants.
