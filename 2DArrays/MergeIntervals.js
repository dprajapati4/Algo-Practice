// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Approach: Sort the array, so that all the closely related ranges are near each other. Store the first range in the results array. Than iterate over the intervals array starting at the second item. Compare the last element in the results array's last interval, to the first number at the current index's interval in the intervals array. If the last num is greater than the first num, we know these two ranges over lap and so we can update the interval range in the results array to be the max between outer bounds between the two intervals. If the number is smaller we simple add that current interval into the results array.

// For example: Results = [[1,3]], and Intervals = [[2,6], [8,10]], we compare 3 and 2. Since 3 > 2 , we update the range in results so that Results = [[1,6]]. When we move to [8,10], 6 < 8, so we add it to the results array. Results = [[1,6], [8,10]]

var merge = function (intervals) {
  // EC: No intervals return empty arr
  if (intervals.length === 0) return [];
  // EC: One interval, can't be merged with others so simply return that.

  if (intervals.length <= 1) return [intervals[0]];

  const results = [];

  let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  results.push(sortedIntervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let lastInt = results[results.length - 1];
    let currInt = intervals[i];

    if (lastInt[1] >= currInt[0]) {
      lastInt[1] = Math.max(lastInt[1], currInt[1]);
    } else {
      results.push(currInt);
    }
  }

  return results;
};

// Big O
// Time Complexity: O (n logn) because we sort the array and quickest sorting algo works in O (n logn) time.
// Space Complexity: O(n) because we create a new results array to store the result.
