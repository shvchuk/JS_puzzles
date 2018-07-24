// Queue data structure implementation using two stacks.

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  add(data) {
    this.stackOne.push(data);
  }

  remove() {
    while (this.stackOne.peek()) {
      const data = this.stackOne.pop();
      this.stackTwo.push(data);
    }
    const data = this.stackTwo.pop();

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }

    return data;
  }

  peek() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }

    const data = this.stackTwo.peek();

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }

    return data;
  }
}

module.exports = Queue;
