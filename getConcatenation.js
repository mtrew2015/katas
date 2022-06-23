
//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
var getConcatenation = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }
    return ans;
};

// time compelxity 2n 
// there is probably a better way to do this.

var getConcatenationTryTwo = function(nums) {
    return nums.concat(nums);
}

// runtime was 115 ms on this one, a bit faster than the previous solution.