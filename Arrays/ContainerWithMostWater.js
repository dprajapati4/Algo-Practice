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

    if (total > area) {
      area = total;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};

// BigO
// Time: O(n) we traverse through all of the nodes during DFS
// Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
