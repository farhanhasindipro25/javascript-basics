// Return TRUE if number is even, and FALSE if number is odd.


function isEven(number){
    if(number % 2 === 0){
        return "EVEN";
    }
    else{
        return "ODD";
    }
}

var num1 = 6;
console.log(num1,"- Even/Odd?");
var result1 = isEven(num1);
console.log(result1);

var num2 = 7;
console.log(num2,"- Even/Odd?");
var result2 = isEven(num2);
console.log(result2);

var num3 = 11;
console.log(num3,"- Even/Odd?");
var result3 = isEven(num3);
console.log(result3);



