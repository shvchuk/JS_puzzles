// Check to see if twoprovided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, no spaces or punctuation.
// Consider capital letters to be the same as low.
// ex.
// anagrams('rail safety', 'fairy tales') --> True

function anagrams(stringA, stringB){
     return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// solution #1
// function anagrams(stringA, stringB){
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     } 

//     for(let char in aCharMap){
//         if(aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }

//     return true;

// }

// function buildCharMap(str){
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

