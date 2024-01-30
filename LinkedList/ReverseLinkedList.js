// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Iterative Approach: We can use three pointers to keep track of the current, previous, and next nodes. We can initialize the current node as the head and the previous and next nodes as null.
// We can then loop through the array and move the pointers forward until the current node is null.

const reverseList = (head) => {
  let currhead = head;

  let currentNode = currhead;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    //This sets the next node to the currents next node and then points the current node's next to the prevNode. This swaps the direction of of arrow from -> to <-.
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    // Advance the prev and current node.

    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }
  // set new head of the list
  currhead = prevNode;
  return currhead;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(1) -> storing the values in variables

// Recursive Approach: We can use a recursive function to reverse the list. We can initialize the current node as the head and the previous and next nodes as null.

const reverseListRecursive = (head) => {
  //base case
  if (head === null || head.next === null) {
    return head;
  }

  //recursive call
  let reversedListHead = reverseListRecursive(head.next);

  // Set head node as head.next.next
  head.next.next = head;
  //set head's next to be null
  head.next = null;
  return reversedListHead;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(n) -> recursive call stack
