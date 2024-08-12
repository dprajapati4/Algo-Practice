// Given a string s of '(' , ')' and lowercase English characters. Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Stack Approach: Use a stack to track the open brackets indexes. As you iterate over the string, if you encounter a closing bracket, and if the stack is not empty, pop off an item from the stack. If the stack is empty, add the index to the bad indexes object, this is because if you encounter a closing bracket without an opening bracket, it means it doesn't have a pair, so this index should be removed. Lastly, if anything remains in the stack, add it also to the bad indexes obj, because this means that there is a remaining opening pair that doesn't have a closing matching pair. Lastly, iterate over the string again and add to the answer string, and check the bad indexes object to see which indexes should not be added. Then return the newly created string.

const minRemoveToMakeValidStack = (s) => {
  const badIndexes = {};
  const stack = [];
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        badIndexes[i] = true;
      } else {
        stack.pop();
      }
    }
  }

  while (stack.length) {
    let remainingBracket = stack.pop();
    badIndexes[remainingBracket] = true;
  }

  for (let i = 0; i < s.length; i++) {
    if (badIndexes[i] === undefined) {
      ans = ans + s[i];
    }
  }

  return ans;
};

// BigO
// Time Complexity: O(n) because we iterate over the string twice and stack, so O(n) + O(n) + O(m), where n is the length of the string and m the length of the stack. O(2n + m) = O(n)
// Space Complexity: O(n) because we create a new stack and obj O(n) + O(n) = O(2n) -> O(n), and use variables.

// Approach: Using a variable and track the difference, an opening bracket is a +1 and closing bracket is a -1 and a object. In a stack you popped off the remaining items and were able to remove them from that index, but without a stack how would you track those extras that needed to be removed? Logically, an open bracket at the end of string, most likely does not have a pair. So remove the number left in the diff of open brackets from the end.

const minRemoveToMakeValidDiff = (s) => {
  const badIndexes = {};
  let diff = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      diff++;
    } else if (s[i] === ")") {
      if (diff === 0) {
        badIndexes[i] = true;
      } else {
        diff--;
      }
    }
  }

  for (let i = s.length; i >= 0; i--) {
    if (diff === 0) break;

    if (s[i] === "(") {
      diff--;
      badIndexes[i] = true;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (badIndexes[i] === undefined) {
      ans = ans + s[i];
    }
  }

  return ans;
};

// BigO
// Time Complexity: O(n) because we iterate over the string 3 times,  O(n) + O(n)+  O(n) = O(3n) -> O(n)
// Space Complexity: O(n) because we create a new stack and obj O(n) + O(n) = O(2n) -> O(n), and use variables.

// Approach: Space optimal, build the answer string as you iterate over the string the first time. Instead of storing the bad indexes in the object just don't include them in the answer. Instead track the total number of open brackets, and the diff- the remaining number of unclosed open brackets. After the first loop, iterate over the first created ans string and only include total open brackets - diff  number of open brackets in the answer.

const minRemoveToMakeValidSpaceOptimal = (s) => {
  const badIndexes = {};
  let diff = 0;
  let openBrackets = 0;
  let ans = "";
  let finalAns = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      diff++;
      openBrackets++;
      ans = ans + s[i];
    } else if (s[i] === ")") {
      if (diff === 0) continue;
      ans = ans + s[i];
      diff--;
    } else {
      ans = ans + s[i];
    }
  }
  let timesToRemove = openBrackets - diff;

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === "(") {
      timesToRemove--;
      if (timesToRemove < 0) continue;
    }

    finalAns = finalAns + ans[i];
  }

  return finalAns;
};

// BigO
// Time Complexity: O(n) because we iterate over the string 2 times,  O(n) + O(n) = O(2n) -> O(n)
// Space Complexity: O(n) because we only use variables and make a temp string.
