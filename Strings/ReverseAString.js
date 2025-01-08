// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

// Approach: Use two pointers, one at the start of the string and one at the end and swap the two.

const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    // can also destructure instead of using a temp variable
    // [s[left], s[right]] = [s[right], s[left]]

    left++;
    right--;
  }

  return s;
};

// BigO
// Time Complexity: O(n) because we go through all the characters in the the string once.
// Space Complexity: O(1) because we swap in place.

// Approach: Use recursion - Create a helper function swap that takes in a start and end index and a string. Swap the items at the first and last index in the string and then recursively call swap on the next indexes. We are moving the index's towards the middle, so the base case and stopping point is when the indexes meet in the middle.

var reverseStringRecursively = function (s) {
  function swap(f, l, s) {
    if (f >= l) {
      return;
    }
    let temp = s[f];
    s[f] = s[l];
    s[l] = temp;

    swap(f + 1, l - 1, s);
  }

  return swap(0, s.length - 1, s);
};

// BigO
// Time Complexity: O(n) because we go through all the characters in the the string once.
// Space Complexity: O(n) because of the recursion call stack.