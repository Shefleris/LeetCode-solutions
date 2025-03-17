/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((elem1, elem2)=>{
        let element1 = fn(elem1);
        let element2 = fn(elem2)
        return element1 < element2 ? -1
            : element1 > element2 ? 1
            : 0
    })
};