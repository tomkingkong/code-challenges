const fib = n => n < 2 ? n : fib(n-1) + fib(n-2);

console.log(fib(5)); // 5
console.log(fib(6)); // 8
