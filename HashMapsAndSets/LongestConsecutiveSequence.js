// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.

// Approach: Create a set use the fact that sets have O(1) lookup to check if the previous number is in the set. If the previous number is not in the set, this means this current number would be the start of a sequence, so increment a counter keeping track of the longest sequence and   than keep checking if the  next num  exists and incrementing the longest counter. If current's previous number exists we dont run checks since this means the current number wont be the start of the sequence.

const longestConsecutive = (nums) => {
  const numsSet = new Set(nums);
  let longest = 0;

  for (num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let nextNum = num + 1;
      length = 1;
      while (numsSet.has(nextNum)) {
        length += 1;
        nextNum += 1;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};

// Big O
// Time Complexity - O(n)  We search for the next number only if the previous number is not in the set.
// Space Complexity - O(n) Because we create a new set from nums.

// Brute force: Sort the array and check the next num and increment a longest counter

const longestConsecutiveBF = (nums) => {
  if (nums.length == 0) return 0;

  const sorted = nums.sort((a, b) => a - b);
  let count = 1;
  let max = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] === 1) {
      count += 1;
      max = Math.max(max, count);
    } else if (sorted[i] == sorted[i - 1]) continue;
    else {
      count = 1;
    }
  }

  return max;
};

// Big O
// Time Complexity - O(nlogn)  Because we sort the array and quickest sorting algo works in O (n logn) time.
// Space Complexity - O(1) Because we only use constants.
