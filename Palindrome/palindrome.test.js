const palindrome = require('./palindrome');

test('palindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy();
});

test('"10000001" is a palindrome', () => {
    expect(palindrome('10000001')).toBeTruthy();
});

