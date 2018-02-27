// ex 1  REVERSE A String
// Return a string in reverse
// reverseString('hello') === 'olleh'

// method #1

function reverseString(str){
    const strArr = str.split('');
    strArr.reverse();

    return strArr.join('');
}

// Reverse string short method #1

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

// string reversal method #5

function reverseStringFive(str){
    let revString = '';
    str.split('').forEach(function(char) {
        revString = char + revString;
    });
    return revString;
}

// string reversal method #5 modified

function reverseStringFiveMod(str){
    let revString = '';
    str.split('').forEach( char => revString = char + revString);
    return revString;
}

// string reversal method #6

function reverseStringSix(str){
    return str.split('').reduce(function(revString, char){
        return char + revString;
    }, '')
}

// string reversal method #6 modified

function reverseStringSixMod(str){
    return str.split('').reduce((revString, char) => char + revString, '');
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

output = reverseStringFive('JavaScript');
console.log('method #5 -> ' + output);

output = reverseStringFiveMod('JavaScript');
console.log('method #5 mod -> ' + output);

output = reverseStringSix('JavaScript');
console.log('method #6 -> ' + output);

output = reverseStringSixMod('JavaScript');
console.log('method #6 mod -> ' + output);

