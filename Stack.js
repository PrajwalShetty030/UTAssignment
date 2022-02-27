class Stack {
  last;
  arry;
  tol_size;

  constructor(tol_size) {
    this.last = -1;
    this.arry = [];
    this.tol_size = tol_size;
  }
  push(element) {
    if (this.last == this.tol_size - 1) {
      console.log("Stack is full-Stack Overflow");
    } else {
      this.last += 1;
      this.arry[this.last] = element;
      console.log(`Item is pushed : ${element}`);
      return this.last;
    }
  }
}
