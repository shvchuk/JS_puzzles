const fib = require("./fib");

test("Fib function is defined", () => {
  expect(typeof fib).toEqual("function");
});

test("calculates correct fib value for 1", () => {
  expect(fib(1)).toEqual(1);
});

test("calculates correct fib value for 39", () => {
  expect(fib(39)).toEqual(63245986);
});

test("calculates correct fib value for 50", () => {
  expect(fib(50)).toEqual(12586269025);
});
