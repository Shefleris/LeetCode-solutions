/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = [];
    let indexNr = 0
    while (indexNr < arr.length){
        newArray.push(fn(arr[indexNr], indexNr))
        indexNr++
    }
    return newArray
};