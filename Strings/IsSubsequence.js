// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Approach: Two pointers, iterate through the larger string and track the position of the smaller string. If there is match increase the index of the smaller string. If the index of the smallStr is equal to the length of the smaller string, this means that that it has reached the end and a substring ,s, exists in t, so we return true. Else return false at the end.

const isSubsequence = (s, t) => {
  if (!s) return true;

  let left = 0;
  let right = t.length;
  let smallStrIndex = 0;

  while (left <= right) {
    if (t[left] === s[smallStrIndex]) {
      smallStrIndex = smallStrIndex + 1;
    }

    left = left + 1;
    if (smallStrIndex === s.length) {
      return true;
    }
  }

  return false;
};
// BigO
// Time Complexity: O(n) because we go through all the elements in the height array.
// Space Complexity: O(1) because we are only creating new constants.

// Alternative approach: We iterate over t, and keep track of s's index. If we match values, we increment s's index, if the index we are tracking equals the length of s and we found that value in t, it means we found all values of s and we can end the loop and return true. After iterating over t, we default to returning false, meaning not all letter in s were found in t.

const isSubsequenceAlt = (s, t) => {
  // EC: If s is an empty string than its a substring and we can return true.
  if (s === "") return true;

  // EC: If s is larger than t, it cant be a subsequence.
  if (s.length > t.length) return false;

  let curr = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[curr]) {
      if (curr === s.length - 1) {
        return true;
      } else {
        curr++;
      }
    }
  }

  return false;
};

// BigO
// Time Complexity: O(n) because we go through all the elements in the height array.
// Space Complexity: O(1) because we are only creating new constants.