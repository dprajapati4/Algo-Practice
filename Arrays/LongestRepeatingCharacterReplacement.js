// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Approach: Use a set to get the unique characters. Then iterate over the letters of the set. Use a sliding window and track the number of times that character appears. If the count of the other characters are more than K, than we know that with K replacements we will not have a valid string. So we need to move the window to the right and update the current characters's frequency as needed.
var characterReplacement = function (s, k) {
  const charSet = new Set(s);
  let max = 0;

  for (let char of charSet) {
    let left = 0;
    let charFreq = 0;

    for (let right = 0; right < s.length; right++) {
      if (s[right] === char) {
        charFreq++;
      }
      // we are checking in the substring if the total characters - the freq of char is > k.
      // Since k is the number of times we can replace and still have a valid string
      // If the diff is greater than k, we slide the window to the right and reduce the freq of that character
      while (right - left + 1 - charFreq > k) {
        if (s[left] === char) {
          charFreq--;
        }
        left++;
      }
      max = Math.max(max, right - left + 1);
    }
  }

  return max;
};

// BigO
// Time Complexity: O(nm) -> O(26n). We iterate over each unique character once, which requires O(k) time. We move a sliding window for each unique character from left to right of the string. As the window moves, each character of the string is visited at most two times. Once when it enters the window and again when it leaves the window. This adds O(n) time complexity for each iteration. So the final time complexity is O(nm). For all uppercase English letters, the maximum value of m would be 26.
// Space Complexity:  O(m). We use a set to store all unique characters, so the space complexity required here is O(m). but since the max number of uppercase letters in the string can be 26, m=26.
