// Given a string, return the character that is most
// commonly used in the string.
// ex.
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111111") === "1"

function maxChar(str){
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str){
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
