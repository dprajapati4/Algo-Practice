// Given the roots of two binary trees p and q, write a function to check if they are the same or not.Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Approach: Use DFS to traverse the trees. If the val of the nodes we are comparing are the same we then go on to recursively call isSameTree on the left and right trees of p and q. If they don't match we return false. At the end if we traverse both trees without any differences this means they have identical tree structure.

const isSameTree = (p, q) => {
  //Edge case
  if (!p || !q) return false;
  //Base case, we have recursively gone through all nodes
  if (!p && !q) return true;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// BigO
// Time: O(n) we traverse through all of the nodes during DFS
// Space: O(n) We calculate this from O(h) where h is the height of the tree, but it comes O(n) since the recursive call stack in the worst case will be the max height of the tree and equal the number of nodes,n, but a more balanced tree will have a log(n) space complexity.

// BFS Approach: In BFS we start at the root and visit each children level by level. We each this iteratively by using a queue. We start with both roots in the queue and compare the nodes at each level. If they are ever unequal, we return false.

const isSameTreeBFS = (p, q) => {
  const queue = [[p, q]];

  while (queue.length > 0) {
    const [node1, node2] = queue.shift();

    if (!node1 && !node2) continue;

    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    queue.push([node1.left, node2.left]);
    queue.push([node1.right, node2.right]);
  }

  return true;
};

// BigO
// Time: O(n) we traverse through all of the nodes during BFS
// Space: O(n) Because we create a queue that holds at max n items.
