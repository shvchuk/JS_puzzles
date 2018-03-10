const capitalize = require('./capitalize');

test('capitalize function exists', () => {
    expect(typeof capitalize).toEqual('function');
});

test('capitalizese the first letter of every word in a sentence', () => {
    expect(capitalize('hi there, how is it going?')).
    toEqual('Hi There, How Is It Going?');
});

test('capitalizes the first letter', () => {
    expect(capitalize('i love breakfast at bill miller bbq')).
    toEqual('I Love Breakfast At Bill Miller Bbq');
});




