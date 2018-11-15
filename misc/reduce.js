// Implement the reduce function

const reduce = (arr, func, init) => {
  let start = 0;
  if (init === 0) {
    init = arr[0];
    start = 1;
  }

  for (let i=start; i<arr.length; i++) {
    init = func(init, arr[i], i, arr);
  }

  return init;
}

console.log(reduce([1, 5, 3, 4, 5], (a, b) => a + b, 0))
