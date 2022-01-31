//Function takes a sorted array and an item
//To conduct a binary search its important to have a sorted array becuase this allows you to dived at the midpoint and have a lesser half and a greater half.
//If the item exsists return the position else return null.

const binarySearch = (array,item) => {

//iniitalize the positions and store them in a variable. High and low keep track of where you are in the list.
let low = 0
let high= (array.length-1)
console.log('the high', high)
console.log('the low',low)

// run this code while you havent narrowed down to one item
while(low <= high ){
// set the midpoint position and round down can round up as well
let midpoint = (Math.floor((low + high)/2))
let guess = array[midpoint]
console.log('the midpoint', midpoint, guess)

//check if the guess at the midpoint position matches the target value

// if value is target item return the position
if( guess === item){
  console.log('in the item found')
  return midpoint
}
//if the guess is less than the target value, set the new low value to be 1 greater than the previous midpoint position.
if(guess < item){
  console.log('in the guess less than')
  low = midpoint +1
}else{
// else the guess is higher than the target item so decrease the search area and reset the high position to be one less than the midpoint.
  console.log('in the guess grater than')
  high = midpoint -1
}


}
return null
}

const myList = [1,3,5,7,9]

console.log(binarySearch(myList,3))
console.log(binarySearch(myList,-1))


// Big O
// Time Complexity  = O(log n) because with each run we logrithmic decrease the number of checks needed to find the target item
//Space Complexity