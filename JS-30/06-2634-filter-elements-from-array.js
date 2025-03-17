/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArray = [];
    let indexNr = 0;
    while (indexNr < arr.length){
        if (fn(arr[indexNr], indexNr)){
            newArray.push(arr[indexNr]);
        };
        indexNr++
    };
    return newArray;
};