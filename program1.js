function longestSubstring(s) {
  // Implementation of longestSubstring function
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  // Iterate through the string
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= start
    ) {
      start = charIndexMap[currentChar] + 1;
    }
    // Update the index of the current character in the map
    charIndexMap[currentChar] = end;
    // Update the maximum length
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

module.exports = { longestSubstring };
