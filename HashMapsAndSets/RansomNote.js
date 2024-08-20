// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.Each letter in magazine can only be used once in ransomNote.

// Approach: Use a Map and populate it with the letters from magazine. Then iterate over ransomNote and check if the letter is in the Map. If it is decrement it from the map. If the letter is not in Map or is at ) return false.

const canConstruct = (ransomNote, magazine) => {
  const magazineMap = new Map();

  // Populate the Map with characters from the magazine
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    if (magazineMap.has(char)) {
      magazineMap.set(char, magazineMap.get(char) + 1);
    } else {
      magazineMap.set(char, 1);
    }
  }

  // Check if the ransomNote can be constructed
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (!magazineMap.has(char) || magazineMap.get(char) === 0) {
      return false;
    } else {
      magazineMap.set(char, magazineMap.get(char) - 1);
    }
  }

  return true;
};

// Big O
// Time Complexity - O(n + m)  We iterate over each item in magazine string that take O(n) time and iterate over the ransomNote string takes O(m) time.
// Space Complexity - O(1) While a Map is created it can at most have 26 letters, since we count frequency of the letters appearance. So the length of the Map does not depend on the magazine or ransomNote string.
