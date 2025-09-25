// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// Approach: Use a freq table and a dynamic sliding window. The catch here is the window size is not a give length, rather its the point when all letters are in the substring. At this point we can start contracting the left end and shorten the window until needed remains 0. We also track a minStart, this is the left index of the window and the minLen, this is the length of the substring. While needed is 0, we should only update minStart, and minLen, if a smaller substring containing all the needed letters are found, since we are looking for the smallest substring. Return the substring or empty string if no matches found.

const minWindow = (s, t) => {
  if (s.length === 0 || t.length === 0) return "";

  const freq = {};

  for (let c of t) {
    freq[c] = (freq[c] ?? 0) + 1;
  }

  let left = 0;
  let needed = t.length;
  let minStart = 0;
  let minLength = Infinity;

  for (let right = 0; right < s.length; right++) {
    let rtChar = s[right];
    if (freq[rtChar] > 0) {
      needed--;
    }
    freq[rtChar] = (freq[rtChar] ?? 0) - 1;

    while (needed === 0) {
      // the first time this sets the minLen to the longest substring that has all letters in t since we initiate minLen with Infinity
      // minLen and minStart will only be updated if the length of a new string will all letters is found

      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }
      let leftChar = s[left];
      freq[leftChar]++;

      if (freq[leftChar] > 0) {
        needed++;
      }
      left++;
    }
  }
  // minStart + minLen -> this is because minLen holds the length of the string not the end point, so the end index is minLen away from the minStart
  return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
};

// BigO
// Time Complexity: O(n) -> since we visit each character in s2 at most twice.
// Space Complexity: O(m) -> O(1). We use a set to store all unique characters, so the space complexity required here is O(m). But since freq has at most 26–128 entries depending on charset we can m is a constant.
