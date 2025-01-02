// 380. Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

// Approach: Think about what ds give you insert/delete and get at O(1) time. An object/map can insert and delete at O(1) time and an array with a known index has get in O(1) time. We can use these two data structures together to solve this problem. To handle the deletion in an array, using built in methods like filter/find increase the time complexity to linear time. So think is there a removal method in arrays that run in O(1) time ---> yes we can use pop(). So we swap the item we want to delete with last item in the array and pop it off. Remember to update the Map object with the correct index as well. Lastly to handle getting a random item at equal probability we can use Math.random times the number of items in the list.

class GetRandomizedSet {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  insert(val) {
    if (this.map.has(val)) {
      return false; // Already present
    }
    let index = this.arr.length; // Correct index
    this.map.set(val, index); // Store index in map
    this.arr.push(val); // Add value
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) {
      return false; // Not present
    }

    // Get index of value to delete
    const indexToDel = this.map.get(val);
    const lastValue = this.arr[this.arr.length - 1]; // Last value in array

    // Swap the value to delete with the last value
    this.arr[indexToDel] = lastValue;
    this.map.set(lastValue, indexToDel); // Update map for swapped value

    // Remove the last value
    this.arr.pop();
    this.map.delete(val);

    return true;
  }

  getRandom() {
    let randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];
  }
}

// const randomSet1 = new GetRandomizedSet();
// randomSet1.insert(1);
// randomSet1.insert(2);
// randomSet1.insert(3);
// randomSet1.insert(4);
// randomSet1.remove(2);
// randomSet1.remove(5);
// randomSet1.getRandom();

// console.log(randomSet1);
// console.log(randomSet1.getRandom());
