function longestSubstring(s) {
  // Implementation of longestSubstring function
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  // Iterate through the string
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    // If the character is already in the map and its index is after the start of the current substring,
    // update the start of the substring to the index after the previous occurrence of the character.
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
