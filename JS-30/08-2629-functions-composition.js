/**'
 * This is version 1
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let newVal = x
        for (let indexNr = functions.length; indexNr--; )
            newVal = functions[indexNr](newVal)
        return newVal
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */



/**
 * This is version 2
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return (x)=>functions.reverse().reduce((accumulator, fn)=>fn(accumulator), x)
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */