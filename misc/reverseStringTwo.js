const reverse = str => {
  let rev = str.split('');
  for (let i=0; i<rev.length/2; i++) {
    let a = rev[i];
    let b = rev[rev.length-1-i];

    rev[i] = b;
    rev[rev.length-1-i] = a;
  }
  return rev.join``;
}

console.log(reverse('tom')) // mot 
console.log(reverse('mathopsew')) // wespohtams