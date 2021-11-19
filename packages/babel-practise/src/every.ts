function every<T>(
  this: ArrayLike<T>,
  callbackfn: (item: T, index?: number, args?: T[]) => boolean,
  thisArg: ArrayLike<T>
): boolean {
  let t: ArrayLike<T> | null = null,
    k = 0
  if (this === null) {
    throw new TypeError('this is null or not defined')
  }
  let O: T[] = Object(this)
  let len = O.length >>> 0
  if (typeof callbackfn !== 'function' && Object.prototype.toString.call(callbackfn) !== '[object Function]') {
    throw new TypeError('callbackfn is not a function')
  }
  if (arguments.length > 1) {
    t = thisArg
  }
  while (k < len) {
    let kValue = null
    if (k in O) {
      kValue = O[k]
      let result = t ? callbackfn.call(t, kValue, k, O) : callbackfn(kValue, k, O)
      if (!result) {
        return false
      }
    }
    k++
  }
  return true
}
Array.prototype.every = Array.prototype.every || every
