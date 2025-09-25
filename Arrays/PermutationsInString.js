// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Approach: Use a freq table and a dynamic window and a variable to track the needed characters to match s1. First create a frequency table of the characters in s1. Then build a sliding window and initiate a needed variable that is equal to the length of s1. As we iterate over S2 if we encounter a character that is in our freq table, decrement needed. Add the letter to the freq table - regardless of whether or not its in s1. Non s1 characters will be set to -1. Check to see if the window has reached the length of s1. If it has we can now try to shift the left side over. If the left character is in needed, we need to increment needed since we are shifting the window away from the left. Update the freq table and add 1 more to that character - this is done regardless of whether or not the char is in s1. When needed is equal to 0, we have found a window with all letters in s1 and we can return true. After iterating over s2 with no matches return false.

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  // we create a frequency map or the characters in s1
  let freq = {};
  for (let char of s1) {
    freq[char] = (freq[char] ?? 0) + 1;
  }

  let left = 0;
  // keeps track of how many characters needed to form s1
  let needed = s1.length;

  // we create a sliding window of size s1 that moves over s2
  for (let right = 0; right < s2.length; right++) {
    let rtchar = s2[right];
    // if this char is needed, decrease "needed"
    if (freq[rtchar] > 0) {
      needed--;
    }
    // if letter is in freq it decrease it or set it to -1
    freq[rtchar] = (freq[rtchar] ?? 0) - 1;
    if (right - left + 1 > s1.length) {
      let leftChar = s2[left];
      // if we are moving past the left letter that is in s1 add it back into the freq table
      if (freq[leftChar] >= 0) {
        needed++;
      }
      freq[leftChar]++;
      left++;
    }
    if (needed === 0) return true;
  }
  return false;
};

// BigO
// Time Complexity: O(n). We iterate over each unique character in s1 once, but s1 is smaller or equal to s2 and we iterate over s2 once. This take O(n) where n is the length of s2.
// Space Complexity:  O(m) -> O(26) -> O(1). We use an object to store all unique characters, so the space complexity required here is O(m), but since the max number of lowercase letters in the string can be 26, m=26.
