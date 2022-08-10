function findOddSum(numbers){
    console.log(numbers);
    console.log("INDEX, ELEMENT");
    const oddNumbers = [];
    for(let i = 0; i < numbers.length ; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 != 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
console.log(findOddSum(myNumbers));