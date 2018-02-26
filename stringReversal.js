// ex 1  REVERSE A String
// Return a string in reverse
// reverseString('hello') === 'olleh'

function reverseString(str){
    const strArr = str.split('');
    strArr.reverse();

    return strArr.join('');
}

// Reverse string short method

function reverseStringShort(str){
    return str.split('').reverse().join('');
}

// string reversal method #2

function reverseStringTwo(str){
    let revString ='';
    for(let i = str.length - 1; i >= 0 ; i--){
        revString = revString + str[i];
    }

    return revString;
}

// Call Function
let output = reverseStringShort('JavaScript');

console.log('method #1 -> ' + output);

output = reverseStringTwo('JavaScript');
console.log('method #2 -> ' + output);