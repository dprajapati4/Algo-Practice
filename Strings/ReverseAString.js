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
