// Use memoize to reduce number of function calls in recursive function

const memoize = fn => {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    
    return result;
  };
}

const slowFib = n => n < 2 ? n : fib(n-1) + fib(n-2);

const fib = memoize(slowFib);

console.log(fib(5)); // 5
console.log(fib(6)); // 8