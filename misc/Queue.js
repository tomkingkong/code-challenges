class Queue {
  constructor(data = []) {
    this.data = data;
  }

  add(...item) {
    this.data = [...item, ...this.data];
    return this.data.length;
  }

  remove() {
    let lastItem = this.data[this.data.length-1];
    this.data = this.data.slice(0, -1);
    return lastItem;
  }

  peek() {
    let lastIdx = this.data.length-1;
    return this.data[lastIdx];
  }
}

let qA = new Queue();
qA.add('1');
qA.add('2');
qA.add('3');
qA.add('4');

let qB = new Queue();
qB.add('A');
qB.add('B');

const weave = (qOne, qTwo) => {
  if (!qOne.data.length && qTwo.data.length) return qTwo.data;
  if (!qTwo.data.length && qOne.data.length) return qOne.data;
  if (!qTwo.data.length && !qOne.data.length) return [];

  let a = new Queue(qOne.data);
  let b = new Queue(qTwo.data);


  let newQueue = new Queue();

  while (a.data.length && b.data.length) {
    newQueue.add(b.remove());
    newQueue.add(a.remove());

    if (!a.data.length) {
      newQueue.add(...b.data);
      b.data = []; 
    } 
    if (!b.data.length) {
      newQueue.add(...a.data);
      a.data = []; 
    }
  }

  return newQueue;
}

console.log(weave(qA, qB).data);