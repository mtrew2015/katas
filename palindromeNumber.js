// Given an integer x, return true if x is palindrome integer.
// Example 1:
// Input: 121
// Output: true

var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    let str = x.toString();
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) return false;
    }
    return true;
    }