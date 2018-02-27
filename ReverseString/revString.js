// Given a string, return a new string with the reversed
// order of characters

function reverse(str){
    // solution #1
    // return str.split('').reverse().join('');

    // solution #1 a)
    // let arr = str.split('');
    // arr.reverse();
    // return arr.join('');

    // solution #2
    // let reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;

    // solution #3
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');

}

module.exports = reverse;