function smallestMissingPositiveInteger(nums) {
  // Implement the function smallest_missing_positive_integer
  nums = nums.sort(function (val1, val2) {
    return val1 > val2 ? 1 : val1 < val2 ? -1 : 0;
  });
  if (nums.length === 0 || nums[nums.length - 1] <= 0) {
    return 1;
  }
  for (var i = 0, k = 1; i < nums.length; ++i) {
    if (nums[i] > k) {
      return k;
    }
    k = nums[i] < k ? k : k + 1;
  }
  return nums[nums.length - 1] + 1;
}

console.log(smallestMissingPositiveInteger([3, 4, -1, 1]));
console.log(smallestMissingPositiveInteger([1, 2, 0]));
console.log(smallestMissingPositiveInteger([-1, -3, 4, 2]));

module.exports = smallestMissingPositiveInteger;
