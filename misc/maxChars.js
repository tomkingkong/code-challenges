// Given a string, return
// the character that is most commonly used in the string

const maxChar = str => {
  const index = {};
  let highest = 0;
  let maxChar = null;
  
  // iterate through array
  for (let char of str) {
    // add character to index and add 1
    // add 1 to char already in index
    index[char] = index[char] + 1 || 1;
    // compare highest to index[char]
    // replace highest if new char occured more
    if (index[char] > highest) {
      maxChar = char;
      highest = index[char];
    };
  }

  return maxChar;
}

console.log(maxChar('heelo')) // e
console.log(maxChar('bastard')) // a
console.log(maxChar('crap')) // c
console.log(maxChar('ookfkokfffof')) // f

