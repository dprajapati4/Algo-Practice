// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Approach: Use a Map to store the frequency of the values in one array. Then iterate over the other array and compare if the value exists and if it's within the frequency it appeared in the other array, if yes, than add to the result and set the value in the Map to one less.

const intersect = (nums1, nums2) => {
  const store = new Map();
  const ans = [];

  for (let num of nums1) {
    if (store.has(num)) {
      const curr = store.get(num);
      store.set(num, curr + 1);
    } else {
      store.set(num, 1);
    }
  }

  for (let num of nums2) {
    if (store.has(num)) {
      let curr = store.get(num);
      if (curr > 0) {
        ans.push(num);
        store.set(num, curr - 1);
      }
    }
  }

  return ans;
};

// BigO
// Time: O(n + m) where m and n are the array lengths. First loop is O(n) and second loop is O(n)
// Space: O(n) because at the worst the Map is at most n length.

// Sort Approach: If we sort the arrays, we don't need an object/map to store values. This will take more time but will use less memory. We sort the nums arrays and then iterate over them, if a value exists in both nums add it to results array. Stop when we have reached the end or at least one array.

const intersectSorted = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  const ans = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      ans.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return ans;
};

// BigO
// Time: O(n logn + m logm) where m and n are the array lengths. This is because we sort each array taking logn time.
// Space: O(n) because we create a results array.
