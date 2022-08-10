// SUM OF ALL ELEMENTS OF AN ARRAY
function findSum(numbers){
    console.log(numbers);
    console.log("INDEX, ELEMENT");
    var sum = 0;
    for(let i = 0; i < numbers.length ; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log(index, element, sum);
    }
    console.log("FINAL SUM OF ALL ELEMENTS:", sum);
}

// SUM OF ALL EVEN NUMBERS OF AN ARRAY
function findEvenSum(numbers){
    console.log(numbers);
    console.log("INDEX, ELEMENT, SUM");
    var sum = 0;
    for(let i = 0; i < numbers.length ; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 0){
            sum += element;
        }
        console.log(index, element, sum);
    }
    console.log("FINAL SUM OF ALL ODD ELEMENTS:", sum);
}

// SUM OF ALL ODD NUMBERS OF AN ARRAY
function findOddSum(numbers){
    console.log(numbers);
    console.log("INDEX, ELEMENT, SUM");
    var sum = 0;
    for(let i = 0; i < numbers.length ; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 != 0){
            sum += element;
        }
        console.log(index, element, sum);
    }
    console.log("FINAL SUM OF ALL ODD ELEMENTS:", sum);
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
console.log(".....SUM OF ALL ELEMENTS OF AN ARRAY.....");
console.log();

findSum(myNumbers);

console.log();
console.log(".....SUM OF ALL ODD ELEMENTS OF AN ARRAY.....");
console.log();

findEvenSum(myNumbers);

console.log();
console.log(".....SUM OF ALL EVEN ELEMENTS OF AN ARRAY.....");
console.log();

findOddSum(myNumbers);