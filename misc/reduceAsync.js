// Like the reduce you implemented in the Easy section, 
// but each item must be resolved before continuing onto the next.

const reduceAsync = async (array, callback, init) => {
  let start = 0;
  
  if (init === 0) {
    init = arr[0];
    start = 1;
  }

  let arr = await Promise.all(array.map(a => a()))

  for (let i=start; i<arr.length; i++) {
    init = callback(init, arr[i]);
  }

  return init;
}

let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))

const runAsync = async () => {
  let exampleA = await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
  // ['a', 'b', 'c']
  let exampleB = await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
  // ['d', 'a', 'c', 'b']
  
  console.log(exampleA)
  console.log(exampleB)
}

runAsync();
