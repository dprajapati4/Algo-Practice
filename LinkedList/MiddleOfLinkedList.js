// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Approach: Use fast and slow pointers.The fast pointer moves two at a time while the slow moves one at a time. When the fast pointer reaches the end the slower pointer should be at the middle.

const middleNode = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(1) -> storing the values in variables
