// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Approach: Use DFS to recursively traverse left and right of each node and then update the diameter whenever a longer path is found.

const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  function findLongestPath(node) {
    //checks if the current node is null, means that we have reached the end of the branch
    if (!node) return 0;

    //checks if there is a right/left, if there is, it adds one for that level and then calls the function of the right/left again
    let left = node.left ? findLongestPath(node.left) + 1 : 0;
    let right = node.right ? findLongestPath(node.right) + 1 : 0;

    if (left + right > diameter) {
      diameter = left + right;
    }

    return Math.max(left, right);
  }

  findLongestPath(root);

  return diameter;
};

// Big O
// Time Complexity: O(n) because in DFS we visit each node 1 time.
// Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
