const maxChar = require('./maxchar');

test('maxChar function exists', () => {
    expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', ()=>{
    expect(maxChar('a')).toEqual('a');
    expect(maxChar('abcdefghaaaaaaa')).toEqual('a');
});

test('Works with numbers in the string', ()=>{
    expect(maxChar('ab1c1hj1hgf1kj1ljh111')).toEqual('1');
});