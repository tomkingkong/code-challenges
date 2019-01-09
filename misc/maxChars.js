// Given a string, return
// the character that is most commonly used in the string

const maxChar = str => {
  const charMap = {};
  let max = null;
  
  for (const char of str) {
    // add character to charMap and set to 1
    // or add 1 to char in charMap
    charMap[char] = charMap[char] + 1 || 1;
    // compare max to charMap[char]
    // replace max if new char occured more
    !max || charMap[char] > charMap[max] ? max = char : null;
  }

  return max;
}

console.log(maxChar('heelo')) // e
console.log(maxChar('bastard')) // a
console.log(maxChar('crap')) // c
console.log(maxChar('ookfkokfffof')) // f

