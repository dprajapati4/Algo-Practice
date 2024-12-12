// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Approach: Iterate over the haystack and when you encounter the the first letter of the needle, iterate over the needle until you reach the end,and an answer, or move forward in the haystack if only a partial match is found. If no match is found return -1.

const strStr = (haystack, needle) => {
  if (needle === "") return 0; // Handle the empty needle case.
  if (haystack.length < needle.length) return -1; // Impossible match.

  let curr = 0;

  while (curr <= haystack.length - needle.length) {
    if (haystack[curr] === needle[0]) {
      let match = true;
      for (let i = 0; i < needle.length; i++) {
        if (haystack[curr + i] !== needle[i]) {
          match = false;
          break;
        }
      }
      if (match) return curr;
    }
    curr++; // Move to the next character in haystack.
  }

  return -1; // No match found.
};

// BigO
// Time Complexity: O(1) we only use const variables.
// Space Complexity: O(n*m) where n is the size of the haystack and m the size of the needle. This worst case scenario happens when the algorithm needs to check many characters repeatedly like if aaa is the needle and aaaaa is the haystack.

// Alternative solutions: Knuth-Morris-Pratt(KMP) Algorithm -> O(n+m) or Rabin-Karp Algorithm -> O(n*m) provides hash-based optimizations.
