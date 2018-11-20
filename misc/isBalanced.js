// - Takes a string and returns true or false 
// indicating whether its curly braces are balanced.

const isBalanced = (str) => {
  if (str.length < 2) return false;
  if (/[\]\)\}]/.test(str[0])) return false;
  const index = {
    ')':'(',
    '}':'{',
    ']':'['
  }
  let stack = [];
  let brackets = str.match(/[\[\]\(\)\{\}]/g);

  for (let i=0; i<brackets.length; i++) {
    if (/[\]\)\}]/.test(brackets[i])) {
      if (index[brackets[i]] !== stack[stack.length-1]) return false;
      stack.pop();
    } else {
      stack.push(brackets[i]);
    }
  }

  return !stack.length;
}

console.log(isBalanced('}{'))                      // false
console.log(isBalanced('{{}'))                     // false
console.log(isBalanced('{}{}'))                    // true
console.log(isBalanced('foo { bar { baz } boo }')) // true
console.log(isBalanced('foo { bar { baz }'))       // false
console.log(isBalanced('foo { bar } }'))           // false
console.log(isBalanced('{({}{})[][][{}]}'))         // true