class Stack {
  stackHead;
  arry;
  total_size;

  constructor(tol_size) {
    this.last = -1;
    this.arry = [];
    this.total_size = total_size;
  }
  push(element) {
    if (this.last == this.total_size - 1) {
      console.log("Stack is full-Stack Overflow");
    } else {
      this.last += 1;
      this.arry[this.last] = element;
      console.log(`Item is pushed : ${element}`);
      return this.last;
    }
  }
  pop() {
    if (this.stackHead == -1) console.log("Stack underflow.");
    else {
      console.log(`element ${this.array[this.stackHead]} is being popped`);
      this.stackHead = this.stackHead - 1;
      console.log("Pop process ends ");
      return this.stackHead;
    }
  }
  peek() {
    if (this.stackHead == -1) {
      console.log("Stack is empty ");
    } else {
      console.log(`The topmost element is ${this.arry[this.stackHead]}`);
    }
  }
}
