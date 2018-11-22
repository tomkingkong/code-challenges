/* 
I want this code to log out "hey amy", 
but it logs out "hey arnold" - why?

function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}

  1. Comparing objects would always result in false
  2. Suggest returning a string with the variable name concatenated
  3. Deconstructing the parameter to show what should be sent
*/

const greet = ({ name }) => `hey ${name}`;

console.log(greet({ name: 'amy' })) // hey amy
//or
const person = { name: 'arnold' };
console.log(greet(person)) // hey arnold