// return the fibonacci sequence up to a given number (n)

const fibArray = (n) => {
  let seq = [0, 1];

  for (let i=0; i<Infinity; i++) {
    let a = seq[seq.length-2];
    let b = seq[seq.length-1];
    seq.push(a+b);
    if (seq.length >= n) {
      return seq.slice(0, n+1);
    }
  }
}

console.log(fibArray(10));