

/**
 *
 *
 * @param {Array} array
 * @param {number} [size=1]
 * @returns {Array} 
 *  
 * 
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 *
 */
function chunk(array, size = 1) {
    // 1-数组分割

    // 非法判断：空数组，或size非整数时，非法返回[]
    size = Math.max(toInteger(size), 0)
    const length = array == null ? 0 : array.length
    if (!length || size < 1) {
        return []
    }


    // 正常情况，进行分割
    let index = 0 //原始编号
    let resIndex = 0 //分割数组编号
    const result = new Array(Math.ceil(length / size))

    while (index < length) {
        result[resIndex++] = slice(array, index, (index += size))
    }
    return result
}

export default chunk