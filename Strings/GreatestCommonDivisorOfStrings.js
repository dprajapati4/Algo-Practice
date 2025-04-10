// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Brute Approach: Test the largest case first, so use the smaller of the two strings and start by testing that as the gcd of the strings.
// Iterate over the shorter string and reduce the base by one character at a time from the end.
// For each base, check if it can evenly divide both strings in length. If not, skip it — a gcd must evenly divide both strings. If it does, repeat the base to rebuild both strings and compare them to the originals. If both rebuilt strings match the originals, the base is a valid gcd — return it immediately. Since we’re checking from the largest possible gcd downward, the first match is guaranteed to be the longest. If no valid gcd is found, return an empty string.

const gcdOfStrings = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;

  function isValid(testStrLen) {
    if (len1 % testStrLen !== 0 || len2 % testStrLen !== 0) return false;

    const repeatCount1 = len1 / testStrLen;
    const repeatCount2 = len2 / testStrLen;

    const base = str1.slice(0, testStrLen);

    const builtStr1 = base.repeat(repeatCount1);
    const builtStr2 = base.repeat(repeatCount2);

    return builtStr1 === str1 && builtStr2 === str2;
  }

  const maxTestStrLen = Math.min(len1, len2);

  for (let i = maxTestStrLen; i > 0; i--) {
    if (isValid(i)) {
      return str1.slice(0, i);
    }
  }

  return "";
};

// BigO
// Time Complexity: O(n * (m + n)) -> where n is the shorter string, and m is the longer string, we checked every prefix string in n, and iterate that over both input strings to check if it matches.
// Space Complexity: O(n * (m + n))  -> because we need to keep a copy of the base in each iteration.


