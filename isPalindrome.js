/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Follow up: Could you solve it without converting the integer to a string?


Example 1:
Input: x = 121
Output: true

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:
Input: x = -101
Output: false
 
Constraints:
-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    
    // define variables
    const stringNum = x.toString();
    let reversedString = "";
    
    // for loop
    for (let i = stringNum.length - 1; i > -1; i--) {
        reversedString += stringNum[i];
    }
    
    if (reversedString === stringNum) {
        return true;
    } else {
        return false;
    }
    
};

// Test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false