// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Approach: Iterate over the s string and add the element as the key and the value as how many times it appears in s. Iterate over t and check is obj[t] exists, if it does subtract 1 for each time you visit it. Return false if a letter appears that doesn't exists in the obj. Last iterate over the obj all the values should equal 0 meaning we have the same number of items in both strings.

const isAnagram = (s, t) => {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] ? (obj[s[i]] = obj[s[i]] + 1) : (obj[s[i]] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]] !== undefined) {
      obj[t[i]] = obj[t[i]] - 1;
    } else {
      return false;
    }
  }
  for (let key in obj) {
    if (obj[key] !== 0) {
      return false;
    }
  }

  return true;
};

// BigO
// Time Complexity: O(n + m) where n is equal to the length of s and m the length of t. If they are the same than its just O(n)
// Space Complexity: O(k) because where k is the number of unique characters.

// Approach that uses an array equal to the size of the english alphabet,26, each index represents a letter in order. We iterate over one string, s, and increment the count array each time we see a letter. In the same loop we decrement 1 from the count array every time we see a letter in t. After iterating over the string we check if each item in the count array is 0, if it is its an anagram.

const isAnagramAlphabet = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let count = new Array(26).fill(0);
  let aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - aCharCode]++;
    count[t.charCodeAt(i) - aCharCode]--;
  }

  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }

  return true;
};

// BigO
// Time Complexity: O(n) where n is equal to the length of s and m the length of t. If they are the same than its just O(n)
// Space Complexity: O(1) since the count array we create is fixed to size 26.
