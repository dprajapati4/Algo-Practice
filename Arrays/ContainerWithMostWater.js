// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.

// Approach: Use two pointers, left one starting at the beginning of the array and the right one at the end. The max water in the container is found by calculating the area of the rectangle. So area of rectangle is width * height. The width is equal to the difference between the two indexes of the left and right pointers. The height is equal to the value of the smaller value at that index of the array. We compare the areas while moving the pointers towards the center until we have checked all the values. We return the greatest area by updating the area with the greater value during each iteration.

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    // Calculate the width of the container
    const w = right - left;
    // Calculate the height of the container
    const h = Math.min(height[left], height[right]);
    // Calculate the area
    let total = w * h;
    area = Math.max(total, area);
    // Keep the larger left or right pointer.
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};

// BigO
// Time: O(n) we iterate through all the items in height once.
// Space: O(1) We dont create any new data structure.

// Brute Force Approach: Use a nested for loop that checks each pair.

const maxAreaBF = (height) => {
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const width = j - i;
      const h = Math.min(height[i], height[j]);
      const area = h * width;
      max = Math.max(max, area);
    }
  }
  return max;
};

// BigO
// Time: O(n^2) For each item in the height array we iterate over the rest of the height array, comparing the areas.
// Space: O(1) We don't create any new data structure.
