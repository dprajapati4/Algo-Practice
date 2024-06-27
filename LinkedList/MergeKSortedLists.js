// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.

// Approach: Builds on Merge Two Sorted Lists and follows the same principle as merge sort. Instead of comparing multiple lists, break the problem down to compare two lists at a time. So each iteration you compare two linked lists, and iterate through the lists. You call mergeLists, which is the same solution in Merge Two Sorted Lists, and store the returned list in an array. At the end you should have one list inside the mergedLists array which is the solution you will return.

const mergeKLists = (lists) => {
  const mergeList = function (l1, l2) {
    let dummy = new ListNode();
    let prev = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        prev.next = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        l2 = l2.next;
      }
      prev = prev.next;
    }

    if (l1) prev.next = l1;
    if (l2) prev.next = l2;

    return dummy.next;
  };

  if (!lists || lists.length === 0) return null;

  while (lists.length > 1) {
    const mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeList(l1, l2));
    }
    lists = mergedLists;
  }

  return lists[0];
};

// BigO
// Time Complexity: O(n log k) -> where k is the number of linked lists and n is the number of nodes per list. This is because merge sort/ divide and conquer, splits the problem in 2 per iteration.
// Space Complexity: O(1) -> no extra space used variables and one dummy node created regardless of the size of the linked list
