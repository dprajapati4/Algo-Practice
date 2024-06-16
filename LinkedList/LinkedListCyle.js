// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Approach: Fast and slow pointers
// We can use two pointers to keep track of the of the fast and slow nodes. We can initialize the fast node as the head and the slow node as the head.
// We can then loop through the array and move the pointers forward until the fast node has reached the last item in the array.
// If the fast node is equal to the slow node we can return true. Else we return false.

const hasCycle = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }
  return false;
};

// BigO Time Complexity: O(n) -> one for loop
// BigO Space Complexity: O(1) -> storing the values in variables

