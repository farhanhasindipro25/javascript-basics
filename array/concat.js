const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const allNumbers1 = newNumbers.concat(numbers);
const allNumbers2 = numbers.concat(newNumbers);

console.log(allNumbers1);
console.log(allNumbers2);
