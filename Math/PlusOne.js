// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.

// Approach: Convert the int array into a string to get the entire number. Then parse it back into an number, but since the inputs are large numbers use BigInt and add 1n, instead of 1. Then turn the new number back into a string and split into an array and return that array.

const plusOne = (digits) => {
  let strDigits = digits.join("");

  //edge case
  if (digits.length === 0) return 0;

  let numDigits = BigInt(strDigits) + 1n;

  return numDigits.toString().split("");
};

// Big O
// Time Complexity: O(n) because we are visiting each item in the string, n, once. The join is O(n), and the converting into BigInt is log(n) and toString is O(n) and it reduces down to O(n)
// Space: O(n) because we are using space to hold the string and bigInt and because we are creating a new array that is related to the size of n.
