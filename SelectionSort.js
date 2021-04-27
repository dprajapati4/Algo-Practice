//Sort an array from smallest to largest

// This function finds the smallest element in the array and stores its value and index
const findSmallest = (array) => {
  // initalizes and stores the values of the smallest value and its index in a variable
  let smallest = array[0];
  let smallest_index = 0;
  console.log("the values at the start", smallest, smallest_index);

  // Loops through the array and checks if the value at that index is smaller than the current smallest, if its smaller than it reassigns the value and the index to that value.
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      console.log("inside the if");
      smallest = array[i];
      smallest_index = i;
      console.log("the values in the change", smallest, smallest_index);
    }
  }
  return smallest_index;
};

//Selection Sort

const selectionSort = (array) => {
  // initialized a new array
const newArray = [];
  // Loops through the array and calls the findSmallest function on that array each time
const cloneArray = [...array];
  for (let i = 0; i < array.length; i++) {
    console.log("the index", array.length);
    const smallestValueIndex = findSmallest(cloneArray);

    // assigns the smallest value to a variable and removes it from the current array and adds it to the newArray.

    newArray.push(...cloneArray.splice(smallestValueIndex, 1));
  }
  return newArray;
};

console.log(selectionSort([5, 3, 6, 2, 10]));
