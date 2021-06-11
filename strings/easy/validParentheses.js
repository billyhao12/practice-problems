// Thanks to https://leetcode.com/Aathishithan/ for helping me solve this problem

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    
    let openedParenthesesIndex = 0;
    let openedParentheses = [];
    let lastOpenedParentheses = "";
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        
        if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
            openedParentheses[openedParenthesesIndex] = currentChar;
            lastOpenedParentheses = currentChar;
            openedParenthesesIndex++;
        } else if ((currentChar === ")" && lastOpenedParentheses === "(") || (currentChar === "}" && lastOpenedParentheses === "{") || (currentChar === "]" && lastOpenedParentheses === "[")) {
            openedParenthesesIndex--;
            lastOpenedParentheses = (openedParenthesesIndex === 0) ? "" : openedParentheses[openedParenthesesIndex - 1]
        } else {
            return false;
        }
    }
    
    return (openedParenthesesIndex === 0);
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
