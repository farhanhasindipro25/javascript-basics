// Incremental Iterative way

let sum1 = 0;
for(let i = 0 ; i <= 5 ; i++){
    sum1 += i;
}
console.log(sum1);

// Decremental Iterative way

let sum2 = 0;
for(let i = 5 ; i >= 1 ; i--){
    sum2 += i;
}
console.log(sum2);

// Recursive approach
function sum(i){
    if(i === 1){
        return 1;
    }
    else{
        console.log(i);
        return i + sum(i-1);
    }
}

console.log(sum(5));