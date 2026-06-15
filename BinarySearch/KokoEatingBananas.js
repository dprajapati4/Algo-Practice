// You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

// You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

// Return the minimum integer k such that you can eat all the bananas within h hours.

// Brute Force Solution: Starting from 1, increase the speed and calculate the total time it takes to go through all the piles at that speed. Compare the total time to h, if its equal or less return that speed. Since we increment starting from 1, this will be the minimum speed.
// This assumes there will always be a value of speed that is less than or equal to h

const minEatingSpeedBF = (piles, h) => {
  let speed = 1;

  while (true) {
    let totalTime = 0;

    for (let pile of piles) {
      totalTime += Math.ceil(pile / speed);
    }

    if (totalTime <= h) {
      return speed;
    }
    speed++;
  }
};

// BigO
// Time: O(n * m) where n is the length of piles and m is the max number of bananas
// Space: O(1) we are not creating any new data structure just using variables.

// Binary Search: As we increase eating speed, time required to eat all piles decreases. We also observe that if at n speed, we could not eat all the bananas by h time, than at speed n - 1 we wont be able to either. We can use binary search to help find the workable boundary range and also quickly decrease the search range. The starting boundary is 1, the minimum speed, and the max speed is the max number of bananas in piles. We can start at the midpoint of those values and than make our boundaries smaller. If the total time it took at that midpoint speed is greater than h, that means our eating speed is too slow, so we need to search in the right range (l becomes midpoint + 1), if the totalTime is less than h, than it means we are eating quick enough but we know need to check if this is the slowest/minimum eating speed we can go at, so we search the left range (r becomes midpoint - 1)

const minEatingSpeed = (piles, h) => {
  let l = 1;
  let r = Math.max(...piles);
  let speed = r;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let totalTime = 0;
    for (const pile of piles) {
      totalTime += Math.ceil(pile / mid);
    }

    if (totalTime <= h) {
      speed = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return speed;
};

// BigO
// Time: O(n * logm) where n is the length of piles and m is the max number of bananas, but since we do binary search it divides each iteration into 2 we get logm.
// Space: O(1) we are not creating any new data structure just using variables.
