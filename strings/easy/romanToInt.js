/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

// Solution 1
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    
    // return variable
    let integer = 0;
    
    // s is a string
    // loop through the string
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === "I") {
            if (s[i + 1] === "V") {
                integer += 4;
                i++;
            }
            else if (s[i + 1] === "X") {
                integer += 9;
                i++;
            } else {
                integer += 1;
            }
            
        } else if (s[i] === "V") {
            integer += 5;
            
        } else if (s[i] === "X") {
            if (s[i + 1] === "L") {
                integer += 40;
                i++;
            } else if (s[i + 1] === "C") {
                integer += 90;
                i++
            } else {
                integer += 10;
            }
            
        } else if (s[i] === "L") {
            integer += 50;
            
        } else if (s[i] === "C") {
            if (s[i + 1] === "D") {
                integer += 400;
                i++
            } else if (s[i + 1] === "M") {
                integer += 900;
                i++
            } else {
                integer += 100;
            }
            
        } else if (s[i] === "D") {
            integer += 500;
            
        } else if (s[i] === "M") {
            integer += 1000;
        }
        
    }
    
    return integer;
    
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("XXIV")); // 24
console.log(romanToInt("CXCIV")); // 194
console.log(romanToInt("CDXL")); // 440