// Write a function that accepts a positive number N.
// The function should console.log a step shape with N levels
// using the # character. Make sure the step has spaces on the right hand side!
// ex.
//     steps(2)
//     '# '
//     '##'

function steps(n){
    let printedString = '';

    for(let i = 2; i <= n; i++){
        printedString += " ";
    }

    let char = "#";

    for(let i = 1; i <= n; i++){
        console.log(char + printedString.slice(i-1));
        char += "#";
    }
}

module.exports = steps;
   