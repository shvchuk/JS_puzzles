const steps = require('./steps');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('steps is a function', () => {
    expect(typeof steps).toEqual('function');
});

test('steps called with n=1', () => {
    steps(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
});

test('steps called with n=2', () => {
    steps(2);
    expect(console.log.mock.calls[0][0]).toEqual('# ');
    expect(console.log.mock.calls[1][0]).toEqual('##');
    expect(console.log.mock.calls.length).toEqual(2);
});