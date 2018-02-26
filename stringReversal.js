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

// string reversal method #3

function reverseStringThree(str){
    let revString = '';
    for(let i = 0; i <= str.length -1; i++){
        revString = str[i] + revString;
    }

    return revString;
}

// string reversal method #4

function reverseStringFour(str){
    let revString ='';
    for(let char of str){
        revString = char + revString;
    }

    return revString;
}

// Call Function
let output = reverseStringShort('JavaScript');

console.log('method #1 -> ' + output);

output = reverseStringTwo('JavaScript');
console.log('method #2 -> ' + output);

output = reverseStringThree('JavaScript');
console.log('method #3 -> ' + output);

output = reverseStringFour('JavaScript');
console.log('method #4 -> ' + output);