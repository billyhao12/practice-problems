/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []

Constraints:
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    const triplets = [];
    
    // empty array
    if (!nums) return triplets;
    
    // less than 3 elements
    if (nums.length < 3) return triplets;
    
    // sorts nums from least to greatest
    const sortedNums = nums.sort((a, b) => a - b);
    
    // two pointers
    let left = 0;
    let right = sortedNums.length - 1;

    for (let i = 0; i < sortedNums.length; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
        
        left = i + 1;
        right = sortedNums.length - 1;
        let sum = 0;
        
        while (left < right) {
            sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
            if (sum === 0) {
                triplets.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                left++;
                right--;
                
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    
    return triplets;
};

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
