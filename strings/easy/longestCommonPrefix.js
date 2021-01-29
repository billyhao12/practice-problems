/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = "";
    
    if (strs === null || strs.length === 0) {
        return prefix;
    }
    
    let comparisonWord = strs[0];
    let otherIndex = 0;
    
    for (let comparisonLetter of comparisonWord) {
        for (let i = 1; i < strs.length; i++) {
            
            // if a letter doesn't match, return prefix
            if (comparisonLetter !== strs[i][otherIndex]) {
                return prefix;
            }
            
        }
        prefix += comparisonLetter;
        otherIndex++;
    }
    
    // This case is reached when comparisonWord matches the first letters of every other word
    return prefix;
};

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["bark","bar"])); // "bar"
