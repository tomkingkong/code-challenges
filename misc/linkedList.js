//Implement a LinkedList class without using JavaScript’s built-in arrays ([]). 
// Your LinkedList should support just 2 methods: add and has:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(...args) {
    this.head = new Node(null);
  }

  add(data) {
    let tail = this.head
    this.head = new Node(data, tail);
  }

  has(data) {

    let curr = this.head;
    
    while(true) {
      if (curr.next == null) return false;
      if (curr.data === data) return true;
      curr = curr.next;
    }
    
  }
}

let list = new LinkedList()
console.log(list.add(4))                           // undefined
console.log(list.add(5))                           // undefined
console.log(list)                           // undefined
console.log(list.has(1))                           // true
console.log(list.has(4))                           // true
console.log(list.has(6))                           // false