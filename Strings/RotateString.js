// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Brute Force Approach: Remove the first letter from the string and append it to the end and check if this new string equals the goal. If it does return true otherwise return false after iterate over the length of the original string.

const rotateStringBF = function (s, goal) {
  // Quick check, if goal and s are not the same length than they will never completely match
  if (s.length !== goal.length) return false;

  let rotated = s;

  for (let i = 0; i < s.length; i++) {
    rotated = rotated.slice(1) + rotated[0];

    if (rotated === goal) return true;
  }

  return false;
};

// BigO
// Time: O(n^2) the slice() and the string concatenation both take n time and we are doing this for each item in the string, so (n + n) * n = 2n^2 = n^2
// Space: O(n) we are creating a new string of n length each time.

// Approach: We can use the idea that if we concatenate two string, s, together to make s + s than we can find every rotated combination as a substring of s + s. So all we need to do is check if the goal is a substring of s + s.
// -> if s = abcde than s+s = abcdeabcde --> a [bcdea] bcde -> ab [cdeab] cde -> abc [deabc] de -> abcd [eabcd] e

const rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  let doubled = s + s;

  return doubled.includes(goal);
};

// BigO
// Time: O(n) the creating s + s and the .includes() both take n time  so (n + n) = 2n = O(n)
// Space: O(n) we are creating a new string of 2n length that we simplify to O(n)
