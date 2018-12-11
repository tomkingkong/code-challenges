//Your HashMap should support just 2 methods, get, set:

class HashMap {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }
}

let map = new HashMap
console.log(map.set('abc', 123))                   // undefined
console.log(map.set('foo', 'bar'))                 // undefined
console.log(map.set('foo', 'baz'))                 // undefined
console.log(map.get('abc'))                        // 123
console.log(map.get('foo'))                      // 'baz'
console.log(map.get('def'))                        // undefined

console.log(map)