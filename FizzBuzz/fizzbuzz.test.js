const fizzBuzz = require('./fizzbuzz');

test('fizzBuzz funztion is defined', () => {
    expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzz(5);

    expect(console.log.mock.calls.length).toEqual(5);
});