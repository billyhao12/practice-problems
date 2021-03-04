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
    // return variable
    let prefix = "";
    
    if (strs === null || strs.length === 0) {
        return prefix;
    }
    
    // this never changes
    const comparisonWord = strs[0];

    // keeps track of letters in other words
    let otherLetterIndex = 0;
    
    // loops thru letters of comparisonWord
    for (let comparisonLetter of comparisonWord) {

        // compare comparisonWord with other words
        for (let i = 1; i < strs.length; i++) {
            
            // if a letter doesn't match, return prefix
            if (comparisonLetter !== strs[i][otherLetterIndex]) {
                return prefix;
            }

        }

        // add the common letter to the prefix variable
        prefix += comparisonLetter;

        // advance pointer for other letters
        otherLetterIndex++;
    }
    
    // This case is reached when comparisonWord matches the first letters of every other word
    return prefix;
};

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["bark","bar"])); // "bar"
