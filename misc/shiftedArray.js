/*
A sorted array of distinct integers shiftArr is shifted to the l
eft by an unknown offset and you don’t have a pre-shifted copy 
of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 
3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a 
function shiftedArrSearch that finds and returns 
the index of num in shiftArr. If num isn’t in shiftArr, return -1. 
Assume that the offset doesn’t equal to 0 (i.e. assume the array 
  is shifted at least once) or to arr.length - 1 
  (i.e. assume the shifted array isn’t fully reversed).

*/

// 3, 4, 5, 1, 2

const shiftedArraySearch = (shiftArr, num) => {
  let begin = 0;
  let end = shiftArr.length -1;
  const findMid = (a) => a / 2 -0.5<<0;
  let mid = findMid((begin + end));

  while (begin < end) {
    let piv = shiftArr[mid];
    let start = shiftArr[begin];

    // console.log(shiftArr, begin, mid, end)
    if (piv === num) return mid;

    if (piv > num && num > start) {
      end = mid;
      mid = findMid((begin + end));
    } else {
      begin = mid;
      // mid = (findMid((end - begin))+begin);
      mid = (end - begin /2 -0.5<<0) + begin;
    }
  }

  return -1;
}

console.log(shiftedArraySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(shiftedArraySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(shiftedArraySearch([3, 4, 5, 1, 2], 4)) // 1
console.log(shiftedArraySearch([5, 1, 2, 3, 4], 4)) // 4
console.log(shiftedArraySearch([5, 1, 2, 3, 4], 6)) // -1