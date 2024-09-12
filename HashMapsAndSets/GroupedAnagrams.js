// Given an array of strings strs, group the  anagrams together. You can return the answer in any order.

// Approach: Use a hashmap, where the key is a sorted string. The idea is that sorted anagrams should be equal since they have the same letters. Store the strings as values of the sorted str.

const groupAnagramsSorted = (strs) => {
  const groupedAnagrams = {};

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!groupedAnagrams[sortedStr]) {
      groupedAnagrams[sortedStr] = [];
    }
    groupedAnagrams[sortedStr].push(str);
  }

  return Object.values(groupedAnagrams);
};

// Big O
// Time Complexity - O(n⋅klogk) Sorting the string takes O(k logk) time where k is the length of the string, time n, where n is the number of strings.
// Space Complexity - O(n * m) because we create a hashmap and store each sorted string.

// Approach: Use a character frequency count as the key for each group of anagrams instead of a sorted string.

const groupAnagrams = (strs) => {
  const groupedAnagrams = {};

  for (let str of strs) {
    const charCount = new Array(26).fill(0);

    for (let char of str) {
      // This calculates the index of the character relative to 'a'
      charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = charCount.join("#");
    // If the key is not in the hashmap, create a new entry
    if (!groupedAnagrams[key]) {
      groupedAnagrams[key] = [];
    }

    // Push the original string into the array for that key
    groupedAnagrams[key].push(str);
  }

  return Object.values(groupedAnagrams);
};

// Big O
// Time Complexity - O(n*m) Building the frequency array and joining it into a string key takes O(m) for each string, times n strings = O(n * m)
// Space Complexity - O(n) 𝑂(𝑛 *26 ) -> O(n) space complexity, where 26 is the fixed size for character counts.
