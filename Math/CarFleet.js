// There are n cars traveling to the same destination on a one-lane highway.

// You are given two arrays of integers position and speed, both of length n.

// position[i] is the position of the ith car (in miles)
// speed[i] is the speed of the ith car (in miles per hour)
// The destination is at position target miles.

// A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

// A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

// If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

// Return the number of different car fleets that will arrive at the destination.

// Stack Approach: Use a stack and sorting to track fleets. The number of turns it will take each car to reach the target is equal to (targetPos - position)/ speed. With the caveat that a car cannot surpass a car in front of it but with join it and become a fleet if it catches up to it. So to handle this we first convert the two arrays into a combined tuple array, that has a position and speed of each car. Now we sort it closest to the target first/ largest to smallest position and iterate over it. We calculate the number of turns/steps to reach the target and add it to the stack. Now on the stack we compare the last added item to the next last item. If the number of turns to reach the target is less than or equal to the prev last item in the stack, this means that the current car will catch up to the car in front of it and join it in a fleet. So we can pop off the last item/last added item from the stack. At the end, the number of items in the stack is equal to the number of fleets.

const carFleet = (target, position, speed) => {
  let pair = position.map((p, i) => [p, speed[i]]);
  pair.sort((a, b) => b[0] - a[0]);
  let stack = [];

  for (let [p, s] of pair) {
    let turns = (target - p) / s;
    stack.push(turns);

    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
};
// BigO
// Time Complexity: O(n logn) because the map takes n time, the sorting takes n logn time and we iterate over the pair array one time. So n +  n logn + n -> 3nlogn -> nlogn
// Space Complexity: O(n) since we create a new stack.
