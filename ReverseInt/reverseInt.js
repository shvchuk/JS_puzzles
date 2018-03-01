// Given an integer, return an integer that is the reverse 
// ordering of numbers
// ex. 
// reverseInt(981) === 189
// reverseInt(-15) === -51

function reverseInt(n){
    // one line solution
    //return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);

    let reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;