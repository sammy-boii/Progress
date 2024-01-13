function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentValue
  }
  return arr
}

const arr = [3, 5, 7, 10, 8, 9, 2]
console.log(insertion_sort(arr))
