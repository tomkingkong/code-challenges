class Node {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(c => {
      return c.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBreadthFirst(fn) {
    const queue = [this.root];
    
    while (queue.length) {
      const shiftedNode = queue.shift();
      queue.push(...shiftedNode.children);
      fn(shiftedNode);
    }
  }

  traverseDepthFirst(fn) {
    const queue = [this.root];

    while(queue.length) {
      const shiftedNode = queue.shift();
      queue.unshift(...shiftedNode.children);
      fn(shiftedNode);
    }
  }
}

