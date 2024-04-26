// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise. Note that multiple kids can have the greatest number of candies. In other words, return true for the index if with the extra candies the kid has equal to or more than the current max number of candies in the arr. For example [2,3,5,1], with 3 extra candies, all values greater than or equal to 5 should be true.

// Approach: Can iterate over the values and find the current max value, then iterate over again and compare max value with values with the extra candies and push's true or false into the results array.

const kidsWithCandies = (candies, extraCandies) => {
  let max = 0;
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    let value = candies[i];
    if (value > max) {
      max = value;
    }
  }
  for (let i = 0; i < candies.length; i++) {
    let sum = candies[i] + extraCandies;
    if (sum >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

//BigO
// Time Complexity: O(n) -> From O(n) + O(n) = O(2n) = O(n)
// Space Complexity: O(n) where n is the length of the arr, n.

//Alternative using built-in JS function

const kidsWithCandiesSimple = (candies, extraCandies) => {
  const max = Math.max(...candies);
  return candies.map((item) => item + extraCandies >= max);
};

// Time Complexity: O(n)
// Space Complexity: O(n)
