// Bubble Sort

// A sorting algorithm that iterates through a list and compares the adjacent values. It swaps elements to either shift them towards the beginning or the end of the list. It assumes the list is unsorted at first, so it runs at least one. It is implemented with two loops The first loop iterates as long as the list is unsorted, we assume it it is unsorted when we start. The second loop is within the first, it compares two values and checks is the first element larger than the second element? If it is, we swap the position of the elements. The larger element is now at a greater index than the smaller element.  When a swap is made, we know the list is still unsorted. The outer loop will run again when the inner loop concludes. The process repeats until the largest element makes its way to the last index of the list. The outer loop runs until no swaps are made within the inner loop.

// Helper function to swap
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

const bubbleSort = (input) => {
  let swapCount = 0;
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Big O
// Time Complexity - O(n^2) In bubble sort, where n is the number of elements in the list,  we perform n-1 comparisons for our inner loop. Then, we must go through the list n times in order to ensure that each item in our list has been placed in its proper order.  In a worst case scenario, the inner loop does `n-1` comparisons for each `n` element in the list.
// Space Complexity - O(0) - Bubble Sort sorts the list in-place.
