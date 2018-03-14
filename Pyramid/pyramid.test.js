const pyramid = require('./pyramid');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('pyramid is a function', () => {
    expect(typeof pyramid).toEqual('function');
});

test('prints a pyramid for n=2', () => {
    pyramid(2);
    expect(console.log.mock.calls[0][0]).toEqual(' # ');
    expect(console.log.mock.calls[1][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(2);
});