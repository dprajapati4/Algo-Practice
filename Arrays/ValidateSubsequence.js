/* Given two non-empty arrays of integars, write a function that determines if the second array is a subset of the first array */

// Solution 1 :

function isValidSubsequence(array, sequence) {
  // store position of index
  let indexArr = 0;
  let indexSeq = 0;
  // while there are elements in both the seqence and the array
  while (indexArr < array.length && indexSeq < sequence.length) {
    // check if the element at index position of the array is equal to the sequence element.
    if (array[indexArr] === sequence[indexSeq]) indexSeq++;
    //regardless of if the element was found in the array, move forward
    indexArr++;
  }
  // if all the elements in the sequence were found in the array, the sequence index should be the one more than the last element which is equal to the seqence length.
  return indexSeq === sequence.length;
}

/* BigO
Time Complexity: O(N)
If N is the length of the array, we visit each item of the arrays only once.

Space Complexity: O(1)
If N is the length of the array, than the amount of space taken by the array remains constant as N grows.

*/