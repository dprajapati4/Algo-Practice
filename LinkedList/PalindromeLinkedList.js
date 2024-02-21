// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Naive approach: We can store the values of the linked list in an array and then use two pointers to compare the values of the array from the start and end. If the values are the same, we can continue to compare the next values. If the values are different, we can return false. If we reach the end of the array, we can return true.

const isPalindrome = (head) => {
  let curr = head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    if (arr[first] !== arr[last]) return false;
    first++;
    last = last - 1;
  }
  return true;
};

//BigO Time Complexity: O(n) + O(n) = 0(2n) -> O(n) -> two loops
//BigO Space Complexity: O(n) -> storing the values in the array

// Optimized approach: We can use two pointers to find the middle of the linked list. We can then reverse the second half of the linked list. We can then use two pointers to compare the first half of the linked list with the reversed second half of the linked list. If the values are the same, we can continue to compare the next values. If the values are different, we can return false. If we reach the end of the linked list, we can return true.

const isPalindromeOptimized = (head) => {
  // Find the middle of the linked list
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the second half of the linked list
  let curr = slow;
  let prev = null;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let first = head;
  let second = prev;
  // Compare the first half of the linked list with the reversed second half of the linked list
  while (second) {
    if (first.val !== second.val) return false;
    first = first.next;
    second = second.next;
  }
  return true;
};

//BigO Time Complexity: O(n) -> one for loop
//BigO Space Complexity: O(1) -> storing the values in variables
