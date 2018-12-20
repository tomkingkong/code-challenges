// Create merge sort function

const mergeSort = (array) => {

  return split(array);

  function split(arr) {
    if (arr.length < 2) return arr;

    let half = arr.length / 2 << 0;
    let left = arr.slice(0, half);
    let right = arr.slice(half);
  
    return merge(split(left), split(right));
  }
  
  function merge(leftArr, rightArr) {
    let right = [...rightArr];
    let left = [...leftArr];
    let temp = [];

    while (left.length && right.length) {
      if (left[0] > right[0]) {
        temp.push(right.shift());
      } else {
        temp.push(left.shift());
      }
    }

    return [...temp, ...left, ...right];
  }
}

let a = [3, 4, 5, 1, 2];
let b = [9, 4, 2, 1, 2];
let c = [3, 4, 5, 1, 2, 3, 4, 5, 1, 2];
let d = [3, 4];
let e = [2];
let f = [];
let g = [2, 4, 5, 6, 45, 4, 1, 24, 5, 67, 7, 76, 5, 41, 24, 11, 22, 33, 12, 14, 15, 16, 16, 17, 79,];

console.log(mergeSort(a)); // [1, 2, 3, 4, 5]
console.log(mergeSort(b)); // [1, 2, 2, 4, 9]
console.log(mergeSort(c)); // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
console.log(mergeSort(d)); // [3, 4]
console.log(mergeSort(e)); // [2]
console.log(mergeSort(f)); // []
// console.log(mergeSort(g)); // [ 1,2,4,4,5,5,5,6,7,11,12,14,15,16,16,17,22,24,24,33,41,45,67,76,79 ]