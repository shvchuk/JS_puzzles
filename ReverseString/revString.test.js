const reverse = require('./revString');

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse reverses a string abcd', () => {
    expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse a string qwerty', () => {
    expect(reverse('qwerty')).toEqual('ytrewq');
});