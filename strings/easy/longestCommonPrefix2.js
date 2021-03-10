function longestCommonPrefix2(strs) {

    if (strs === null || strs.length === 0) return "";
    
    let prefix = "";

    // puts the shortest word first in the array
    const sorted_arr = strs.sort();

    // loops through letters of the first word in the array
    for (let i = 0; i < sorted_arr[0].length; i++) {

        // if letter of first word matches letter of last word, add to the prefix
        if (sorted_arr[0][i] === sorted_arr[sorted_arr.length - 1][i]) {
            prefix += sorted_arr[0][i];
        }

        // else break out of the for loop
        else {
            break;
        }

    }

    return prefix;

}

console.log(longestCommonPrefix2(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix2(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix2(["bark","bar"])); // "bar"
