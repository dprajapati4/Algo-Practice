// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Brute Force Approach: Create a window of size k, and a results array, for each window find the max and add it to the results array. Increment the window until you reach the end.

const maxSlidingWindowBF = (nums, k) => {
  if (k === 1) return nums;

  const res = [];
  let left = 0;
  let right = k - 1;

  while (right < nums.length) {
    let currWin = nums.slice(left, right + 1);

    res.push(Math.max(...currWin));

    left++;
    right++;
  }

  return res;
};

// Big O
// Time Complexity: O(n · k) because for each window, we do a slice and a scan during Math.max.
// Space: O(n) slice() creates a temporary array of size k each time → worst-case O(k) and res holds about n outputs → O(n). So O(k + n) --> O(n)

// Monotonic Dequeue Approach: Use a queue that holds the indexes that have the top k max values. It built so that the max value is the first value. For each window, the first element in the deque array is the index of the current windows max.

const maxSlidingWindow = (nums, k) => {
  const res = [];
  // stores indexes of potentially max elements
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // if there are values in the deque and the deque is out of range of current window, remove the first
    if (deque.length && deque[0] === i - k) {
      deque.shift();
    }
    // remove the index of the smallest number, from the end and replace them with them with the index of larger nums in the window.
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);

    // when we have a valid window (when i >= k - 1) start adding to the res
    if (i >= k - 1) {
      // add the windows max
      res.push(nums[deque[0]]);
    }
  }

  return res;
};

// Big O
// Time Complexity: O(n) because for each window, we don't recompute the max and iterate over nums once.
// Space: O(k) we store at max k items in each window in deque.
