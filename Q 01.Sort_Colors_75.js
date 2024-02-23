Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

solution------

 let low = 0;
    let high = nums.length - 1;
    let i = 0;

    while (i <= high) {
        if (nums[i] === 0) {
            // Swap nums[i] with nums[low] and move both pointers
            [nums[i], nums[low]] = [nums[low], nums[i]];
            low++;
            i++;
        } else if (nums[i] === 2) {
            // Swap nums[i] with nums[high] and move high pointer
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--;
        } else {
            // If nums[i] is 1, just move i pointer
            i++;
        }
    }
