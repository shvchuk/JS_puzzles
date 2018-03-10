// Write a function that accepts a positive number N.
// The function should console.log a step shape with N levels
// using the # character. Make sure the step has spaces on the right hand side!
// ex.
//     steps(2)
//     '# '
//     '##'

function steps(n, row = 0, stair = ''){
    // recursive solution
    if (n === row){
        return;
    }

    if (n === stair.length){
        console.log(stair);
        return steps(n, row + 1);
    }

    if(stair.length <= row){
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair);
}

module.exports = steps;
   
// my solution
// function steps(n){
//     let printedString = '';

//     for(let i = 2; i <= n; i++){
//         printedString += " ";
//     }

//     let char = "#";

//     for(let i = 1; i <= n; i++){
//         console.log(char + printedString.slice(i-1));
//         char += "#";
//     }
// }

// iterative solution with rows & columns
// function steps(n){
//     for(let row = 0; row < n; row++){
//         let stair = '';

//         for (let column = 0; column < n; column++){
//             if(column <= row){
//                 stair += "#";
//             } else {
//                 stair += ' ';
//             }
//         }

//         console.log(stair);
//     }
// }