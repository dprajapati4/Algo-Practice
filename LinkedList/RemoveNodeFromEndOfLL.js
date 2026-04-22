// You are given the beginning of a linked list head, and an integer n.

// Remove the nth node from the end of the list and return the beginning of the list.

// Brute Force

// Two Pass: Find Length of LL and then compute the index to skip and than skip it during the second pass

const removeNthFromEndTwoPass = (head, n) => {
  // find the end of LL
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  // compute index to remove
  let removeIndex = length - n;
  if (removeIndex === 0) {
    return head.next;
  }
  // skip nth index
  curr = head;
  for (let i = 0; i < length - 1; i++) {
    if (i + 1 === removeIndex) {
      curr.next = curr.next.next;
      break;
    }
    curr = curr.next;
  }

  return head;
};

// BigO
// Time: O(n) since we iterate over the entire array once
// Space: O(1) since we only create variables.
