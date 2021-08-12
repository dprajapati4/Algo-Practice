class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // create a new node with the value
    let newNode = new Node(value);
    // check if a root exists if not the new node as the root
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      // initialize variable that starts at the root and will be updated as we traverse the tree
      let current = this.root;
      // runs a loop while true and will use return to break out of loop
      while (true) {
        // edge case that takes care of duplicates
        if (value === current.value) return undefined;
        // checks if value is less than the current and then if there is a node to the left of the current value. If not it sets it as the left value.
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            // if there is a current.left, it makes the current that left node and then checks again.
            current = current.left;
          }
        } else if (value > current.right) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    // check if there is a root
    if (this.root === null) return null;
    // Initalize a current and found variable
    let current = this.root;
    let found = false;

    // while the value is not found and there are nodes in the tree
    while (current && !found) {
      if (value < current.value) {
        // if the value is less than current, then we need to check on the left side of the tree
        current = current.left;
      } else if (value > current.value) {
        // if the value is greater than current, we need to check the right side of the tree.
        current = current.right;
      } else {
        // if the value is not less than or greater than current, than the current must equal the value
        found = true;
      }
    }
    // if value is not in BST return undefined
    if (!found) return undefined;
    // return the node if found
    return current;
  }

  // Breadth First Search : we traverse through even level
  BFS() {
    // create a queue(FIFO) via an array to hold the values you visit and an array that will return the visited nodes in BFS order and a node variable to temp hold the nodes removed from the queue.
    const data = [];
    const queue = [];
    let node = this.root;
    // push the root into the queue
    queue.push(this.root);
    // Loop while there are items in the queue
    while (queue.length) {
      // Dequeue a node from the queue and push the value of the node into the data array.
      node = queue.shift();
      data.push(node);
      // Check if that node has a left and a right value and store them in the queue.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Depth First Search has 3 types, but in general means is that we are going to traverse down the tree to the end before visiting sibling nodes.

  // Traverse the entire left side recursively before traversing nodes on the right
  PreOrder() {
    // Create a variable to store the values of the nodes visited
    const data = [];
    // Create a variable that stores the current node, start it with the root node
    let current = this.root;
    // creater a helper function which helps accept a node
    function traverse(node) {
      // push the value of node to data array.
      data.push(node);
      // if node has a left node call the helper function on the left node
      if (node.left) traverse(node.left);
      // if the node has right node, call the helper function on the right node
      if (node.right) traverse(node.right);
    }
    // Invoke the helper function on the current node
    traverse(current);
    return data;
  }

  // Visit a node/the root after looking at the left and the right(all the children). Gives us numbers in order
  PostOrder() {
    // Create a variable to store the values of the nodes visited and initialize the current node at the root
    const data = [];
    const current = this.root;
    // Create a helper function that you call recursively to traverse all the children first and then the root/parent node
    function traverse(node) {
      // Check if there is a left or a right node if there is call traverse recursively on that node
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      // if there is no left or right nodes, push that node into the data list

      data.push(node);
    }

    traverse(current);

    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);

console.log(tree.PostOrder());

// Big O
// Insertion/ Searching O(log n)
// When you double the size of the BST, you only increase the number of steps to find/insert by 1.
// But this is not guaranteed. For example and extremely one side BST
