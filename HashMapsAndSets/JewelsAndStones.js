// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Brute Force Approach: Use a nested for loop, iterate over the stone and compare each stone to each item in jewels. Use a counter and increment it every time you match a stone to a jewel.

const numJewelsInStonesBF = (jewels, stones) => {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count++;
        break;
      }
    }
  }

  return count;
};

// Alternative Approach: Has a the same time and space complexity because includes() internally iterates through the jewels string to check if the stone exists in it.

const numJewelsInStonesBFInc = (jewels, stones) => {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    jewels.includes(stones[i]) ? count++ : 0;
  }
  return count;
};

// Big O
// Time Complexity - O(n * m) We iterate over each item in stone for each item in jewel. So O(n) * O(m), where n is the length of stones and m the length of the jewels.
// Space Complexity - O(1) we only create a new variable.

// Approach: Use a set. Sets are keyed collections that use a hash table internally to store data using keys, unlike arrays that are stored sequentially by index. This allows lookup in Sets to be O(1) time action as opposed to an O(n) for an array.

const numJewelsInStonesSet = (jewels, stones) => {
  let count = 0;
  const jewelSet = new Set(jewels);
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      count++;
    }
  }

  return count;
};

// Big O
// Time Complexity - O(n + m)  We iterate over each item in stones array that take O(n) time and creating a Set from the jewels string takes O(m) time, where m is the length of the jewels string.
// Space Complexity - O(m) Because we create a new set, where m equals the length of the jewels string.
