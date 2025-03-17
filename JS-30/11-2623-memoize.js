/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = new Map()
    return (...args)=> {
        const cacheId = JSON.stringify(args);
        return cache.has(cacheId) ? cache.get(cacheId) : cache.set(cacheId, fn(...args))&&cache.get(cacheId);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */