//Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

//Approach: Use breath first search. Initiate a queue and an array to store the average results and a variable to store the number of nodes and the running sum.
//While the queue is not non-empty, loop through the number of nodes at the current level. Shift off the first item from the queue and add that value to the running sum.
// Check is there is a right and left node, and if there are add them to the end of the queue. After looping through the level, divide the sum by that levels size to get the average and add it to the results array. Rest sum to 0 for the next level.

const averageOfLevels = (root) => {
  const result = [];

  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      sum += current.val;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(sum / size);
  }
  return result;
};

//Big O
//Time Complexity: O(n) because in BFS we visit each node 1 time.
//Space Complexity: O(n) for queue that can in the worst case contain all the nodes at the maximum level of the binary tree.
