// Iterative Approach

let factorial = 1;
for(let i = 5 ; i >= 1 ; i--){
    factorial *= i;
}
console.log(factorial);


// Recursive Approach

function getFactorial(i){
    if(i === 1){
        return i;
    }
    else{
        return i * getFactorial(i-1);
    }
}

console.log(getFactorial(5));