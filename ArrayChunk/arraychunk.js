// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// ex
// arraychunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]

function arrayChunk(array, size){
    const chunked = [];
    let index = 0;

    while(index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;

}

// solution #1
// function arrayChunk(array, size){
//     const chunked = [];

//     for(let element of array){
//         let last = chunked[chunked.length -1];

//         if(!last || last.length === size){
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunked;

// }


module.exports = arrayChunk;