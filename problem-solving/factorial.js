function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

function factorialReverse(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}

function factorialWhile(number){
    let result = 1;
    let i = 1;
    while (i <= number){
        result *= i;
        i+=1;
    }
    return result;
}

const result = factorial(7);
console.log(result);
const result1 = factorial(10);
console.log(result1);
const result2 = factorial(3);
console.log(result2);
const result3 = factorial(120);
console.log(result3);

const resultR = factorialReverse(7);
console.log(resultR);
const result1R = factorialReverse(10);
console.log(result1R);
const result2R = factorialReverse(3);
console.log(result2R);
const result3R = factorialReverse(120);
console.log(result3R);

const result3W = factorialWhile(120);
console.log(result3W);