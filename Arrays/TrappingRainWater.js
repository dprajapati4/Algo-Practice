// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Approach: The idea is that the amount of water that can be trapped at any point is the min between the left and right max's minus the current positions height. So create an array of left max's and right maxes - understand that the max of the first value and the last value is 0 because theres not values there. Using the left and right maxes iterate over the array that sums the equation min(left,right) - height.

const trap = (height) => {
  if (height.length === 0) return 0;

  const left = new Array(height.length).fill(0);
  const right = new Array(height.length).fill(0);

  // Calculate the max height to the left of each point
  left[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }

  // Calculate the max height to the right of each point
  right[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  }

  // Calculate the trapped water
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    sum += Math.min(left[i], right[i]) - height[i];
  }

  return sum;
};

// BigO
// Time Complexity: O(n) because we go through all the items in height array 3 times one after another, so O(n) + O(n) + O(n) = O(3n) -> O(n)
// Space Complexity: O(n) because even create two new arrays to store the left and right max arrays.

// Approach: Create two pointers, a left and a right starting at opposite ends of height array. As you move towards the middle keep track of the max encountered on the left and the right and store them in a left max and a right max. At each index, move the pointer (left or right) that points to the smaller height, because the trapped water depends on the shorter side. Determine the height of the water by the difference between the leftMax or rightMax (whichever side is smaller) and the height at that index. Add that value to a sums array that you return at the end.

var trapTwoPointers = (height) => {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let sum = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]; // update left max
      } else {
        sum += leftMax - height[left]; // add trapped water
      }
      left++; // move left pointer to the right
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]; // update right max
      } else {
        sum += rightMax - height[right]; // add trapped water
      }
      right--; // move right pointer to the left
    }
  }

  return sum;
};

// BigO
// Time Complexity: O(n) because we iterate over the height array once.
// Space Complexity: O(1) since we only use variables.
