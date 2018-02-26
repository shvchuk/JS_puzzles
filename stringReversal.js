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


// Call Function
const output = reverseStringShort('JavaScript');

console.log(output);