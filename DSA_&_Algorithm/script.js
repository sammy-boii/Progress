function merge_sort(arr) {
  if (arr.length <= 1) {
    return arr // base case
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(merge_sort(left), merge_sort(right))
}

function merge(left, right) {
  let arr = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  return [...arr, ...left, ...right]
}

const arr = [4, 2, 3, 10, 8, 5, 1]
console.log(merge_sort(arr))
