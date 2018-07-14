// write a function that accepts an integer N and returns
// a NxN spiral matrix.
//  examples
// matrix(3)
// [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
  }
}

module.exports = matrix;
