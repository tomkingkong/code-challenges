class Stack {
  constructor(data = []) {
    this.data = data;
  }

  push(...items) {
    this.data = [...this.data, ...items];
    return this.data.length;
  }
  
  pop() {
    let lastItem = this.data[this.data.length-1];
    this.data = [...this.data.splice(0, -1)];
    return lastItem;
  }

  peek() {
    return this.data[this.data.length-1];
  }
}