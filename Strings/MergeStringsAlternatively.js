// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string.

// Approach: Find the min length iterate over that many times, alternating between the two words. Then add the remaining substring to the longer word to the merged list.

const mergeAlternately = (word1, word2) => {
  let mergedString = "";

  let minLength = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLength; i++) {
    if (i < word1.length) mergedString += word1[i];
    if (i < word2.length) mergedString += word2[i];
  }

  mergedString += word1.substring(minLength);
  mergedString += word2.substring(minLength);
  return mergedString;
};

// BigO
// Time Complexity: O(n + m) because we go through all the characters in the the smaller string and than the substring.
// Space Complexity: O(n + m ) because the new string can at max be the length of both words.
