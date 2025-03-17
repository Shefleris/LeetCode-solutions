/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let reducerValue = init;
    let indexNr = 0;
    while (indexNr<nums.length){
        reducerValue = fn(reducerValue, nums[indexNr])
        indexNr++
    }
    return reducerValue;
};