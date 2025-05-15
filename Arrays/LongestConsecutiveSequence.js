// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// Brute Force Approach: Iterate over the nums array and for each element in nums, check if its in the nums array and if that num + 1 is in the nums array. Keep doing this while the value exists in the nums array. Track this length and compare to the max length and update it as appropriate. Return the max value in the end.

// An alternative that doesnt use a set.

const longestConsecutiveBF = function (nums) {
  let longestStreak = 0;
  for (let num of nums) {
    let currentNum = num;
    let currentStreak = 1;
    while (nums.includes(currentNum + 1)) {
      currentNum += 1;
      currentStreak += 1;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }
  return longestStreak;
};
// BigO
// Time Complexity: O(n^3) -  We iterate over the nums array n times, and because currentNum increases by 1 during each iteration of the while loop, it runs in O(n) time. In each iteration of the while loop, an O(n) lookup in the array is performed.
// Space Complexity: O(1) - Because we only use variables.

// Approach: This is a simple optimization on the BF approach. Create a set that stores all the unique elements in the nums array and a variable to store the max subsequence length. Iterate over the nums array and for each element in nums, check if its in the set store - it should be since we created the set from it - keep track of the length of the sequence, update the curr to be nums +1 and check if that is in the store. Keep doing this while the value exists in the store. Track this length and compare to the max length and update it as appropriate. Return the max value in the end.

// For example in nums[1,3,4,5,20]
// first iteration -> nums = 1 , curr = 1, streak = 1, than it with look for 2, but since 2 does not exist in the store, we exist the while loop and now nums = nums[1] = 3

const longestConsecutiveBFStore = (nums) => {
  let max = 0;
  const store = new Set(nums);
  for (let num of nums) {
    let streak = 0;
    let curr = num;
    while (store.has(curr)) {
      streak++;
      curr++;
    }
    max = Math.max(max, streak);
  }
  return max;
};

// BigO
// Time Complexity: O(n^2) - We iterate over each element in nums n times. The while loop also runs O(n) time, but compared to the BF solution since we are using a Set, lookup is O(1) time.
// Space Complexity: O(n) - Because we are using a Set to store the unique values of nums.

// Sorting Approach: We can sort the array, this will group the elements in order and make it easier to check if the next element is a value one greater than the current. Need to be careful and handle cases for when there are no elements in the nums array or when the next element is the same as the current element. Once the array is sorted, follow similar process as above and increment the current value and the index and check if the next index value is 1 greater (if equal, than don't increment the streak) and increment the streak and update the max as appropriate.

const longestConsecutiveSorted = (nums) => {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let max = 0;
  let curr = nums[0];
  let streak = 0;
  let i = 0;

  while (i < nums.length) {
    if (curr !== nums[i]) {
      curr = nums[i];
      streak = 0;
    }
    while (i < nums.length && nums[i] === curr) {
      i++;
    }
    streak++;
    curr++;
    max = Math.max(max, streak);
  }

  return max;
};

// Few alternative: Can remove duplicates so we don't have to check in the code by creating a set and then sort and then make it an array again.

// BigO
// Time Complexity: O(n logn) - We iterate over the nums array n times, and the sort has a time complexity of nlogn in the most average case.
// Space Complexity: O(1) / O(n) - Because some sort methods take O(n) space so it depends on the sorting algorithm.

// Hash Set / Hash Map Approach: Uses a hash set or map to store unique elements from nums. Iterates over the elements in the set, and for each element checks if a value one greater exists in the set. What separates this from the previous approaches is that before it attempts to create a streak, it checks is a value less than the current value exists, if it does this means that the curr num would be part of a potentially larger steak and so it doesn't attempt to start a streak. When a number is found in which the number-1 does not exist in the set is found it starts the streak. It continues incrementing and checking until a value is not found in the set. This streak is compared to a max streak value and is appropriately updated. It continues through the set and returns the largest streak.

const longestConsecutiveHS = (nums) => {
  const numSet = new Set(nums);
  let max = 0;
  for (let num of numSet) {
    // Checking that a num one smaller than the curr doesn't exist.Bc if it did than the curr would be part of another streak.
    if (!numSet.has(num - 1)) {
      let streak = 1;
      while (numSet.has(num + streak)) {
        streak++;
      }
      max = Math.max(max, streak);
    }
  }
  return max;
};

// BigO
// Time Complexity: O(n) - We iterate over the nums array n times, the while loop nested within the for loop doesn't run in O(n) because the while loop is reached only when currentNum marks the beginning of a sequence (i.e. currentNum-1 is not present in nums), the while loop can only run for n iterations throughout the entire runtime of the algorithm. This means that despite looking like O(n⋅n) complexity, the nested loops actually run in O(n+n)=O(n) time. Since we are using a hashmap/set lookup is O(1) time.
// Space Complexity: O(n) - We use a hashset to store the nums of n length.
