// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Approach: The idea is that the to get the answer of the product you multiple the items left of the index to the items to the right if the array. Use two sub arrays, left which has the product of each index expect the last element in nums, and right which has the product of all items except the first element in nums. Then the result array, answers, has the product of left x right array.

const productExceptSelf = (nums) => {
  const answers = [];
  // This is so we have the left[0] be 1 and right[right.length-1] be 1, because there is nothing to the left of the first element and nothing to the right of the last element.
  const left = new Array(nums.length).fill(1);
  const right = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answers[i] = left[i] * right[i];
  }

  return answers;
};

// BigO
// Time: O(n) we traverse through all of elements in the original array once.
// Space: O(n) we are creating arrays to store the left and right and the answers.

// Constant Space Approach: Can also do this without creating a left and right array and just build the results array with the left and than multiply the right side.

const productExceptSelf2 = (nums) => {
  // initialize result array with 1's.
  const res = new Array(nums.length).fill(1);
  // Update the res with the products of all elements to the left of i
  for (let i = 1; i < nums.length; i++) {
    res[i] = nums[i - 1] * res[i - 1];
  }
  // rightProduct stores the product of the elements to the right of i
  let rightProduct = 1;
  // As we go backward, we multiply current res[i] (which already has the left product) by the rightProduct.
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * rightProduct;
    rightProduct *= nums[i];
  }

  return res;
};

// BigO
// Time: O(n) we traverse through all of elements in the original array once.
// Space: O(1) other than the results array we don't create any additional data structure.

