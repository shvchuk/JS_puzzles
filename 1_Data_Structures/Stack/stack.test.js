const Stack = require("./stack");

test("Stack is a class", () => {
  expect(typeof Stack.prototype.constructor).toEqual("function");
});

test("stack can add and remove items", () => {
  const s = new Stack();
  s.push(1);
  expect(s.pop()).toEqual(1);
  s.push(2);
  expect(s.pop()).toEqual(2);
});

test("stack follows FILO", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toEqual(3);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});
