const arrayChunk = require('./arraychunk');

test('function arrayChunk exists', () => {
    expect(typeof arrayChunk).toEqual('function');
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = arrayChunk(arr, 2);

    expect(chunked).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = arrayChunk(arr, 1);
  
    expect(chunked).toEqual([[1], [2], [3]]);
  });
  
  test('chunk divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = arrayChunk(arr, 3);
  
    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
  });