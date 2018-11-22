/*
  I want this code to log out the numbers 0, 1, 2, 3 in that order, 
  but it doesn’t do what I expect


  1. The variable 'i' is hoisted to the top of the function, 
  or in this case the global scope.
  2. The for loop updates the globally scopped 'i', until it maxes
  out at 4.
  3. The setTimeout places 4 console logs onto the event loop,
  when the stack finally clears (after the for loop finishes)
  the console logs then return 'i' which is no longer scoped to 
  the for loop's code block, so instead reads the global scope.
  4. Using the keyword 'let' would scope the variable 'i' to the for
  loop and when the console logs return, they will see this 
*/


for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
