// Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

// Approach: Dynamic Sliding Window with a auxiliary data structure (Map). We use the Map to store the seen characters and its frequency. Once we surpass k distinct characters we reduce the window from the left until we meet the condition.

const lengthOfLongestSubstringKDistinct = (s, k) => {
  let charMap = new Map();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    let rtChar = s.charAt(right);
    charMap.set(rtChar, (charMap.get(rtChar) ?? 0) + 1);

    while (charMap.size > k) {
      let leftChar = s.charAt(left);
      charMap.set(leftChar, (charMap.get(leftChar) ?? 0) - 1);
      if (charMap.get(leftChar) === 0) {
        charMap.delete(leftChar);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

// BigO
// Time Complexity: O(n). We iterate over the string once and updating the map takes O(1) time so we get O(n)
// Space Complexity:  O(k). We use a Map to store the unique characters but at most the Map will have k + 1 items in it so O(k+1) -> O(k)
