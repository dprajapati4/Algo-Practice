// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Approach: Iterate over the array and when you encounter a 0, check the previous and next points to see if they are 0's or the ends of the array. If they are, this is a position you can plant a flower / 1. Keep track of a counter and update it when you plant a new flower. If that count matches the n return true else return false at the end.

const canPlaceFlowers = (flowerbed, n) => {
  let count = 0;

  // If you want to avoid mutating flowerbed you can create a copy and update that.
  // let bed = [...flowerbed]

  for (let i = 0; i < flowerbed.length; i++) {
    let emptyLeft = i === 0 || flowerbed[i - 1] === 0;
    let emptyRight = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (flowerbed[i] === 0 && emptyLeft && emptyRight) {
      flowerbed[i] = 1;
      count++;
      if (count === n) return true;
    }
  }

  return count >= n;
};

// BigO
// Time Complexity: O(n) - Because we iterate through all the elements in flowerbed once.
// Space Complexity: O(1) - Because we only use variables.
