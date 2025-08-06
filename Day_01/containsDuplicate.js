// test cases:
const nums = [1, 2, 3, 3];
// const nums = [1,2,3,4];
// const nums = [1,2,3,4,1,2,3,4];

// SOLUTION - worst: SC(n) & TC(n)  
function hasDuplicate(nums) {
        const obj = {};
         for (let i = 0;i < nums.length;i++){
            if(nums[i] in obj){
                return true;
            }
            obj[nums[i]] = 1;
        }
        return false;
}