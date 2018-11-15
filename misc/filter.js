// Implement the filter function

const filter = (arr, func) => {
  let filteredArray = [];

  for (let i=0; i<arr.length; i++) {
    if (func(arr[i], i, arr)) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

console.log(filter([1, 2, 3, 4], (n) => n < 3))