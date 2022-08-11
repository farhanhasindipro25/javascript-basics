function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0 ; i < numbers.length ; i++){
        element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}


const heights = [167, 190, 120, 165, 137, 345];
const tallest = maxInArray(heights);
console.log("Tallest height is:",tallest,"cm.");