// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Approach: Use three pointers, one at the end of num1s, and nums2, and the end of nums1 before the zeros. The we build the array from the end. So compare num1 and num2 while there are still elements in num2, and put the larger number at the end of num1. When you are finished with num2, you should have nums1 already in correct order since it was sorted. 

const merge =  (nums1, m, nums2, n) => {
    let i = m - 1; // Last element of nums1's initial portion
    let j = n - 1; // Last element of nums2
    let k = m + n - 1; // Last position in nums1

    // Merge starting from the end of the lists, so replace the ends of the list which should be 0's with the larger element as you move forward in the array.
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

// BigO
// Time: O(n + m) we traverse through all of elements backward in nums1, n, and nums2, m . 
// Space: O(1) we are modifying nums1 in place.