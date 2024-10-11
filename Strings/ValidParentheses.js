// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Approach: Use a map or obj to store the matching pairs, we use the closing as the key because we only want to store the open's in the stack. Create a stack and iterate over the string, check the value is not in the map's values, its an open bracket, so add it to the stack. If it is that means its a closing bracket. When we encounter a closing bracket we want to pop off the matching open bracket from the stack because a complete pair is found. Compare the item popped of the stack to the value in the map, if correct, remove the pair and move on, if not return false because we encountered an invalid pair. At the end if their are still items in the stack or if we encounter closing brackets and the stack is empty, return false this means there are single no pair items left.

const isValid = (s) => {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in map)) {
      stack.push(s[i]);
    } else {
      if (!stack.length) {
        return false;
      }

      let popped = stack.pop();
      if (popped !== map[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// BigO
// Time Complexity: O(n) because we go through all the elements in the string once.
// Space Complexity: O(n) because we create a stack. The hashmap has a fixed size, only 3 elements and doesn't change with input size.
