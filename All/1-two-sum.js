// This is a brute force method of solving this challenge.
// While it is memory efficient, it takes longer than using a hashmap

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */    
var twoSum = function(nums, target) {
    let resultNr
    for (let firstInt = 0; firstInt < nums.length; firstInt++){
        for (let secondInt = 0; secondInt < nums.length; secondInt++){
            resultNr = nums[firstInt] + nums[secondInt]
            if (resultNr === target && firstInt !== secondInt){
                return [firstInt, secondInt]
            } 
        }
    }
};

// This is a Hashmap version. As mentioned previously it's faster but takes more memory.
// Two-pass Hash Table
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */    
var twoSum = function(nums, target) {
    let map = new Map();
    // this minimezes the amount of property look ups as well as
    for (let intNum = nums.length; intNum--; ){
        map.set(nums[intNum], intNum)
    };
    for (let intNum = nums.length; intNum--; ){
        const complimentaryNr = target - nums[intNum];
        if (map.has(complimentaryNr) && map.get(complimentaryNr)!== intNum){
            return [map.get(complimentaryNr), intNum];
        };
    };
    return [];
};

// One pass Hash Table
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */    
var twoSum = function(nums, target) {
    let map = new Map();
    for (let intNum = nums.length; intNum--; ){
        const complimentaryNr = target - nums[intNum];
        if (map.has(complimentaryNr)){
            return [intNum, map.get(complimentaryNr)]
        }
        map.set(nums[intNum], intNum)
    };
    return [];
};
