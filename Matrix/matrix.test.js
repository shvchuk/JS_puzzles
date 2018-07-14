const matrix = require("./matrix");

test("matrix is a function", () => {
  expect(typeof matrix).toEqual("function");
});

test("matrix produces a 2x2 array", () => {
  const m = matrix(2);
  expect(m.length).toEqual(2);
  expect(m[0]).toEqual([1, 2]);
  expect(m[1]).toEqual([4, 3]);
});
