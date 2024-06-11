// Given the root of a binary tree, return all root-to-leaf paths in any order.

// Approach: Use DFS with backtracking. Store the result in an array and traverse through the left and right nodes of the tree. The helper function backtrack takes the root, the result arr paths, and the curPath, an array that keeps track of the current path. You add the value of the current node to curPath. Then check the current node is a leaf, if it is convert the curPath array to a string with '->' as the separator and add it to the paths array. Return and stop as we have reached a leaf node. It then recursively calls backtrack on the left and right node and does a curPath.pop() on each. What this does is it removes the last node after you have reached a leaf so it can check if theres another node on the left/right making it another path. Ie. if a path is 1->2->4(left) and 1->2->5(right), after 1->2->4(left) is added to the result, curPath.pop() removes the 4, so curPath = 1->2, and can now explore the right side of node 2, and add 1->2->5 to the result.

const binaryTreePaths = (root) => {
  let result = [];

  if (!root) return result;
  backtrack(root, result, []);

  return result;

  function backtrack(root, paths, curPath) {
    curPath.push(root.val);

    if (!root.left && !root.right) {
      paths.push(curPath.join("->"));
      return;
    }

    if (root.left) {
      backtrack(root.left, paths, curPath);
      curPath.pop();
    }
    if (root.right) {
      backtrack(root.right, paths, curPath);
      curPath.pop();
    }
  }
};

// Time: O(n) We traverse through all of the nodes during DFS
// Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.
