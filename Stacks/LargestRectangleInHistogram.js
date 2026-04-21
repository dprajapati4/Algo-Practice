// You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.

// Return the area of the largest rectangle that can be formed among the bars.

// Stack Approach: Visualize a histogram, the area of a rectangle is equal to h * w. For each bar, we want to determine how far it can extend to the left and right before hitting a smaller bar, which limits its width. In the example below, the 1 at index 1, can extend to the left into 2 at 0 and all the way to 1 at index 3. The max area is creates is height 1 * width 4, which is 4. How can we extrapolate this into code? We can use a monotonic increasing stack, that stores the [startIndex, height] and as we iterate over the heights array, add each element to the stack. When we are at an element in heights that is smaller that the last item in the stack, we compute the last items in the stacks maxArea and than pop it off, since it can not extend to the right anymore. Once we are at the end of the heights array, we iterate over the stack and compute maxareas of the remaining items in the stack, these are the elements that have been able to extend all the way to the right from their position.

// |.        _3_
// |  _2_   |   |
// | |  |_1_|   |-1-
// |_|__|___|___|___|____________

// We can visualize the problem as a histogram where each bar represents a height. The goal is to find the largest rectangle area formed by contiguous bars.

// We use a monotonic increasing stack, where each element stores [startIndex, height].

// As we iterate through the array:

// If the current height is greater than or equal to the top of the stack, we push it onto the stack.
// If the current height is smaller, it means the bars in the stack can no longer extend to the right.

// So we:

// Pop from the stack
// Calculate area using:
// height * (currentIndex - startIndex)
// Update maxArea
// Carry forward the startIndex so the current bar can extend left as far as possible

// After finishing the iteration:

// Any remaining bars in the stack can extend all the way to the end of the array

// So we compute:

// height * (heights.length - startIndex)

// This ensures we consider the maximum rectangle for every height.

const largestRectangleArea = (heights) => {
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [index, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }
    stack.push([start, heights[i]]);
  }

  for (const [index, height] of stack) {
    maxArea = Math.max(maxArea, height * (heights.length - index));
  }

  return maxArea;
};

// BigO
// Time: O(n) since we iterate over the entire array once and the stack only once.
// Space: O(n) since we create a stack that will hold at max, n items where n is the length of the heights array.
