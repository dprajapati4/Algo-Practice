// Given a string s, find the length of the longest substring without repeating characters.

// Approach: Use a dynamic sliding window and a set to check if there are duplicates. So create Set, and initiate a left pointer. Iterate through the string and check if that character is in the set, if it is, remove it from the set and increment the left pointer of the window. Then add the element at the right point of the window to the set and update the result at each iterate.

const lengthOfLongestSubstring = (s) => {
  const charSet = new Set();
  let left = 0;
  let result = 0;
  // i is the right end of the window
  for (let i = 0; i < s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[i]);
    result = Math.max(result, i - left + 1);
  }

  return result;
};

// BigO
// Time Complexity: O(n) because we go through all the characters in the string.
// Space Complexity: O(n) because we create a set.
