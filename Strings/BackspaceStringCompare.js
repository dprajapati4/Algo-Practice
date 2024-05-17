// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a processString character.

// Approach: Two pointers -Use a helper function that iterates over a string and uses a variable to handle the backspacing. k is an index used to keep track of the position where the next valid character should be placed. If the character is not #, it places the character at the current k position and increments k, else if the character is # and k is greater than 0, it decrements k, "removing" the last valid character. At the end k is returned, which represents the length of the processed string. Pass the array version of the strings and then compare the processed lengths, if they are not the same then the strs are not the same, and then check each letter, and return false if they are not the same. Lastly return true if all checks pass.

const processStringCompare = (s, t) => {
  let sChars = s.split("");
  let tChars = t.split("");

  function process(chars) {
    let k = 0;
    for (let c of chars) {
      if (c !== "#") {
        chars[k++] = c;
      } else if (k > 0) {
        k--;
      }
    }
    return k;
  }

  let processedS = process(sChars);
  let processedT = process(tChars);

  if (processedS !== processedT) return false;

  for (let i = 0; i < processedS; i++) {
    if (sChars[i] !== tChars[i]) return false;
  }

  return true;
};

// BigO
// Time Complexity: O(n+m) where n is equal to the length of s and m the length of m.
//Space Complexity: O(n+m) because we create an array of size n and m, resulting in O(n + m) space.

// Approach 2: Use a stack. Works similarly to the above solution but you don't need to convert the strings into an array. Instead we use a stack. The helper function processes the input string using an array result to simulate a stack. It iterates through each character of the string. If the character is not #, it pushes the character onto the stack. If the character is # and the stack is not empty, it pops the last character from the stack. Lastly, it joins the stack into a string and returns it.

const backspaceCompareStack = (s, t) => {
  function process(str) {
    let result = [];
    for (let char of str) {
      if (char !== "#") {
        result.push(char);
      } else if (result.length > 0) {
        result.pop();
      }
    }
    return result.join("");
  }

  let processedS = process(s);
  let processedT = process(t);

  return processedS === processedT;
};

// BigO
// Time Complexity: O(n+m) where n is equal to the length of s and m the length of m.
// Space Complexity: O(n+m) because we create a stack to store characters, which in the worst case holds all characters except #, resulting in O(n) and O(m) space for s and t
