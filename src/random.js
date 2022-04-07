/**
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
export { randomBetween };


/**
 *
 * @param {T[]} arr
 * @return {T}
 */
function randomFrom(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}
export { randomFrom };