// Merge Sort

// Merging two sorted lists works the same way as you would build a sorted single list, you compare two lists, A and B, and return Combined. Compare the first/smallest elements in A and B, at the first element, if A is smaller, add A to Combined and remove what you added to combined from A, then repeat, is A smaller than B. Do so until one list has reached its end. At that point we can just add the remaining list to the combined because it’s already sorted.

// Implemented in two steps. 1. The algorithm recursively splits the input array until each element is in its own array. 2. Merging sorted arrays – The algorithm compares and combines the elements of arrays until the input array is sorted.

const mergeSort = (startArray) => {
  // Base case
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }

  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);

  // Recursive case mergeSort(leftArray), mergeSort(rightArray)
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  return sortedArray.concat(leftArray).concat(rightArray);
};

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));

// Big O
// Time Complexity: Θ(Nlog(N)) -> dividing the lists = logN and merging N
// Space Complexity: O(N) uses array to store temp values.
