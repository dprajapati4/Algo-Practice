// Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Approach using built in methods: Trim the string to remove leading and trailing spaces and then split the string and reverse it. Return the reversed words joined with a space between them.

const reverseWords = (s) => {
  s = s.trim();
  let reversedWords = s.split(/\s+/).reverse();
  return reversedWords.join(" ");
};

// can also do it as a one liner -> s.trim().split(/\s+/).reverse().join(' ')

// BigO
// Time Complexity: O(n) because we iterate over the string.
// Space Complexity: O(n) since we store the split array

// Approach: Use a stack and dequeue words off the the stack in a LIFO fashion. Iterate over the characters and if the character is not an empty string add it to the word your building, if a word with a length longer than 0 exists than add it to the stack and reset word. Once you have iterated over the string, reverse and join the items from the stack.

const reverseWordsStack = (s) => {
  const stack = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char !== " ") {
      word += char;
    } else if (word.length > 0) {
      stack.push(word);
      word = "";
    }
  }

  if (word.length > 0) {
    stack.push(word);
  }

  return stack.reverse().join(" ");
};

// BigO
// Time Complexity: O(n) because we iterate over the string.
// Space Complexity: O(n) since we store the split array
