// const factorial = (n) => {
//   let result = n;
//   for(let i=n-1; i>0; i--) {
//     result*=i;
//   }
//   return result;
// }

const factorial = (n) => {
  if (n < 2) return 1;
  return factorial(n-1)*n;
}

console.log(factorial(6));