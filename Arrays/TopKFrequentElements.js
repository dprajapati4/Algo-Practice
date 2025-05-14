// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// Heap Approach:

// Bucket Sort Approach: Use an object to store the number of times each element appears in nums. Now that you have this object, you can use it to create a frequency array. For this frequency array, the index has an array indicates the frequency of that element in nums. This array is proportional to the size of the input array, this means the max index is equal to the length of the array. This means that the max frequency of an element is if all elements in nums is the same number and that is length of nums. Now we can iterate over the frequency array in descending order, and add each item from the array at each index into the results array until we reach the k items.

const topKFrequent = (nums, k) => {
  const obj = {};
  // This creates an array of nums length at which each index has an empty []
  const freq = Array.from({ length: nums.length + 1 }, () => []);
  const results = [];

  // This builds the frequency object
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = obj[nums[i]] + 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  // This builds the frequency array
  for (let num in obj) {
    freq[obj[num]].push(parseInt(num));
  }

  // Now we iterate from the largest frequency to the lowest, iterated over each item at that frequency until we reach k.
  for (let i = freq.length - 1; i > 0; i--) {
    for (let n of freq[i]) {
      results.push(n);
      if (results.length === k) {
        return results;
      }
    }
  }
};

// BigO
// Time Complexity: O(n) because we iterate over nums, the object and the array, O(n) + O(n) + O(n) = 3 O(n) = O(n)
// Space Complexity: O(n) because we create a new object and array and at largest they are n length.
