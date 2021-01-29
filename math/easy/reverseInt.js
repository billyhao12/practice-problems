/*
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0
 
Constraints:
-2^31 <= x <= 2^31 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    // input and output variables
    let input = x.toString();
    let output = "";
    
    // for loop to loop through each digit of the number
    for (let i = input.length-1; i > -1; i--) {
        output += input[i];
    }
    
    // Convert the string back to a number
    output = parseInt(output);
    
    // If input was negative, ensure that output is also negative
    if (input * -1 > 0) {
        output *= -1;
    }
    
    // Check if reversed integer is within the range
    if (output > (2 ** 31) - 1 || output < -(2 ** 31)) {
        return 0;
    }
    
    return output;
    
};

console.log(reverse(1534236469)); // 0
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(-120)); // -21
