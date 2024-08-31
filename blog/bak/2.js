function flat(arr, deep) {
  if (deep === 0) {
    return arr
  }
  let ret = []
  for (let i = 0 ; i < arr.length ; i ++){
    if (Array.isArray(arr[i])) {
      ret.push(...flat(arr[i], deep - 1))
    } else {
      ret.push(arr[i])
    }
  }
  return ret
}
console.log(flat([1,2,3,[4,5, [6,7]]], 1))