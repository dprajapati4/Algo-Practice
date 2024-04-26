/* Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum,the function should return them in an array, in any order.
If two numbers sum up to the target sum, the function should return an empty array
*/



// Solution 1:  Nested for-loop
function twoNumberSum(array, targetSum) {
	for(let i=0; i<array.length-1; i++){
		let first = array[i]
		for(let j=i+1; j<array.length; j++){
			let second = array[j]
			if(first+second === targetSum) return [first, second]
		}
	}
	return []
}

/* BigO
Time Complexity: O(N^2)
If N is the length of the array, the nested loop runs N times per item in the array so O(N*N) = O(N^2)

Space Complexity: O(1)
The amount of space taken by the function remains constant as N grows.

*/


// Solution 2 : Uses a hash table to store array values and find values that equal the target sum.

function twoNumberSum(array, targetSum) {
	let hash = {}
	for ( const num of array) {
		const potentialMatch = targetSum - num;
		if(potentialMatch in hash) {
			return [potentialMatch, num];
		} else {
			hash[num] = true
			console.log(hash)
		}
	}
	return []
}

/* BigO
Time Complexity: O(N)
If N is the length of the array, the function loops through each item of the array only once.

Space Complexity: O(N)
We create a hash table that grows at the rate of N. 

*/