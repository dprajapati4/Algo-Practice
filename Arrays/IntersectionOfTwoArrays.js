// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Set Approach: Use two sets, one set that stores the values of one array. Another to hold the answer, this ensures this unique.
const intersectionBF = (nums1, nums2) => {
  const seen = new Set(nums1);
  const res = new Set();

  for (let num of nums2) {
    if (seen.has(num)) {
      res.add(num);
    }
  }

  return Array.from(res);
};

// BigO
// Time: O(m + n) where m and n are the array lengths. Converting to a set takes O(n), iterating over the other array O(m). Converting the set into the array O(m).
// Space: O(m+n) because in the worst case - all elements are unique, n space is used to store set1 and m space is used to store set2.

// Two Pointer Approach: Sort the arrays and than use two pointers to compare the two values at the array. If they match add them to a result set. If they don't match, increment the pointer for the smaller value. Stop when you reach the end of one array.

const intersectionTwoPointers = (nums1, nums2) => {
  const res = new Set();
  let i = 0,
    j = 0;

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.add(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return Array.from(res);
};

// BigO
// Time: O(n logn +m logm) where m and n are the array lengths. Sorting each array takes logn time. Converting to a set takes O(n), iterating over the other array O(m). Converting the set into the array O(m).
// Space: O(min(m,n)) or just O(n), we use a set, in the worst case all elements are unique in the smaller array and present in the larger.

// Dictionary Approach: Use an object to store the values seen in one array, then iterate over the other array and if a value exists in the seen object, than add to the results and update the value to 0. You can make this value and 'x' or something else too. This is to ensure duplicates are not added.

const intersectionObj = function (nums1, nums2) {
  const seen = {};
  const ans = [];

  for (let num of nums1) {
    if (seen.hasOwnProperty(num)) {
      seen[num] = seen[num] + 1;
    } else {
      seen[num] = 1;
    }
  }

  for (let num of nums2) {
    if (seen.hasOwnProperty(num) && seen[num] > 0) {
      ans.push(num);
      seen[num] = 0;
    }
  }

  return ans;
};

// BigO
// Time: O(n + m) where m and n are the array lengths. First loop is O(n) and second loop is O(n)
// Space: O(n) because at the worst the object is at most n length.
