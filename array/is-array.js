const country = "Bangladesh";
const age = 23;
const isFat = true;
const education = {
    institution: "BRAC University",
    degree: "Bsc. in CSE",
    cgpa: 3.59,
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add(num1,num2){
    return num1 + num2;
}

// Checking Types
console.log(typeof country);
console.log(typeof age);
console.log(typeof isFat);
console.log(typeof education);
console.log(typeof numbers);
console.log(Array.isArray(numbers));
console.log(typeof add);