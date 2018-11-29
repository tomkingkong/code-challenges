//  Like Object.assign, but merges objects deeply. 
// For the sake of simplicity, you can assume that 
// objects can contain only numbers and other objects (and not arrays, functions, etc.).

const assignDeep = (a, b) => {
  let combo = a;
  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);

  if (!bKeys.length && aKeys.length) return a;
  if (!aKeys.length && bKeys.length) return b;

  const keyIsObj = (obj) => {
    return obj ? Object.keys(obj) : null;
  }

  const combine = (objA, objB) => {
    for (let val in objB) {
      if (typeof objB[val] === 'number') {
        objA[val] = objB[val];
      } else {
        objA[val] = {...objB[val], ...objA[val]};
        if (keyIsObj(objB[val])) {
          combine(objA[val], objB[val]);
        }
      }
    }
  }

  combine(combo, b);

  return combo;
}

console.log(assignDeep({ a: 1 }, {}))              // { a: 1 }
console.log(assignDeep({ a: 1 }, { a: 2 }))        // { a: 2 }
console.log(assignDeep({ a: 1 }, { a: { b: 2 } })) // { a: { b: 2 } }
console.log(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }))
// { a: { b: { c: 1, d: 2 }}, e: 3 }
