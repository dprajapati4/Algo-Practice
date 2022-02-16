/* Write a function that takes a non-empty array sorted in ascending order and returns an array of the same length that has the sqaures of the array values also in ascending order
*/

// Solution 1: Brute

function sortedSquaredArray(array) {
  // Write your code here.
	const sortedA = new Array(array.length).fill(0);
	//traverse the array
	for(let i=0; i<array.length; i++) {
		//store the value at that element and then at that element in the array store the squared value
		const value = array[i]
		sortedA[i] = value * value;
	}
	//sort the array
	sortedA.sort((a,b) => a -b)
	return sortedA
}

/* BigO
Time Complexity: O(nlog(n))
The .sort() function takes nlog(n) time, as the most time consuming part of the function it gives the entire function a time complexity of nlog(n) time.

Space Complexity: O(N)
We create a new array length of N, so the extra data structure we create gives us a space complexity of O(N).
*/

// Because the array is in the ascending order, the largest sqaure is either the last item in the array or is the first item in the array as the square of a very negative number is a large postive number.
// Track the first and last and set the array from the end to the begining

// Solution 2 