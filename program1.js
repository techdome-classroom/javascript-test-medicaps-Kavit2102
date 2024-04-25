function longestSubstring(arr) {
  // Implementation of longestSubstring function
  const positiveIntegers = arr.filter((num) => num > 0);

  // Step 2: Construct a set to store positive integers
  const integerSet = new Set(positiveIntegers);

  // Step 3: Iterate from 1 to the maximum value in the list
  const max = Math.max(...positiveIntegers);
  for (let i = 1; i <= max + 1; i++) {
    // Return the first integer that is not present in the set
    if (!integerSet.has(i)) {
      return i;
    }
  }

  // Return max + 1 if all positive integers are present
  return max + 1;
}

module.exports = { longestSubstring };
