// Determine if a number is a prime number

const isPrime = (num) => {
  if (num % 2 === 0 || num < 2) return false;

  for (let i = 2; i<Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

let i = isPrime(32416190071);
console.log(i);
