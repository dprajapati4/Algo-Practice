//You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
//Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

//Approach: Since letters is a sorted list you can use Binary Search. Initiate a left and right pointer, with the first and last index of the array.
//While the right is greater than the left (this means while the right and left indices have not converged/met in the middle) you want to check if the midpoint is greater than or
//less than the target value. If the midpoint value is less than the target, we move the left pointer to mid + 1, if the midpoint value was greater than the target we move the right to mid -1.
// We continue this until we have searched through all of the options. At the end if we check if the left reached the end of the arr, and since this list is in ascending order this is the largest value,this means
// that the next largest value for the target was not found, so we will return the first character, else we will return the character at left, which is the smallest character greater than the target

const nextGreatestLetter = (letters, target) => {
  let left = 0;
  let right = letters.length - 1;
  console.log("right", right, "left", left);

  while (right >= left) {
    const midpoint = Math.floor((left + right) / 2);
    const checking = letters[midpoint];
    console.log(midpoint);

    if (checking <= target) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }

  return left > letters.length - 1 ? letters[0] : letters[left];
};

//BigO
// Time: O(log n) BS divides each iteration into 2.
// Space: O(1) only uses constants
