// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// Brute Force Approach: Build an object that has the number as the key and the frequency as the value. Then convert that into an array and sort based on the frequency, the most frequent being the first value. Then iterate over that array and push K items into the returned answer array.

const topKFreqBF = (nums, k) => {
  const freqObj = {};
  for (const num of nums) {
    if (!freqObj[num]) {
      freqObj[num] = 1;
    } else {
      freqObj[num] = freqObj[num] + 1;
    }
  }

  const freqArr = Object.entries(freqObj).sort((a, b) => b[1] - a[1]);

  const ans = [];

  for (let i = 0; i < k; i++) {
    ans.push(Number(freqArr[i][0]));
  }

  return ans;
};

// BigO
// Time Complexity: O(n logn) because we iterate over nums, than sort an array that take log n time.
// Space Complexity: O(n) because we create a new object and array and at largest they are n length.

// Heap Approach: Store the frequency a number appears in a Map, then use a min-heap to organize the frequencies. The min-heap holds the least frequent number at the root, it makes it easy to remove.
//  JS does not have a native heap, you can build one, but in you can simulate a min-heap using a array. Be able to communicate what it does.

const topKFreqHeap = (nums, k) => {
  const freqMap = new Map();
  const heap = [];
  for (const num of nums) {
    if (freqMap.has(num)) {
      let currFreq = freqMap.get(num);
      freqMap.set(num, currFreq + 1);
    } else {
      freqMap.set(num, 1);
    }
  }

  for (const [num, freq] of freqMap.entries()) {
    heap.push({ num, freq });
    // If the heap length is greater than k, sort the heap, "heapify up", the least frequent number to the top and remove it.
    if (heap.length > k) {
      heap.sort((a, b) => a.freq - b.freq);
      heap.shift();
    }
  }

  return heap.map((entry) => entry.num);
};

// BigO
// Time Complexity: O(n*k logk) because creating the freqMap = O(n), sort the heap of size at most k → O(k log k) and building the results O(k)
// Using Real Heap : O(n logk)
// Space Complexity: O(n) because we create a new object and array and at largest they are n length.

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
