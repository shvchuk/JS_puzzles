// print out the n-th entry in the fibonacci series.
// Fib - each number is the sum of the preceeding two.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
// ex. fib(4) === 3

function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

module.exports = fib;
