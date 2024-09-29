const mathIsFun = (numberString) => {
  const nums = numberString.split("|");
  let maxSum = undefined;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = parseInt(nums[i]) + parseInt(nums[j]);

      if (sum > maxSum || maxSum === undefined) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

console.log(mathIsFun("12|13|-4|5"));
