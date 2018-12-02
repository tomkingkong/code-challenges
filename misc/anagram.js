// create a function to determine if two strings are anagrams of each other

const anagram = (strA, strB) => {
  if (!strA.length 
      || !strB.length 
      || (strA.length !== strB.length)) return false;

  let a = 0,
      b = 0;
  
  for (let i=0; i<strA.length; i++) {
    a += strA.charCodeAt(i);
    b += strB.charCodeAt(i);
  }

  return a === b;
}

console.log(anagram('dog', 'god')) //true
console.log(anagram('doggy', 'god')) //false
console.log(anagram('albert', 'bleart')) //true
