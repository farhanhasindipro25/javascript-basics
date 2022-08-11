const numbers = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const numbers2 = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const numbers3 = [12, 45, 32, 22, 44, 62, 29, 69, 87];


// slice does not affect the original array
// slice(startIndex, endIndex)
const partial = numbers.slice(2,5);
console.log(partial);
console.log(numbers);

// splice affects the original array
// splice(startIndex, noOfElements)
const partial2 = numbers2.splice(2,5);
console.log(partial2);
console.log(numbers2);

// using splice, new elements can be added in place of the deleted elements starting from the index from where splice was initiated.
// splice(startIndex, noOfElements, element1, element2,...,elementN)
const partial3 = numbers3.splice(2,5,100,200,3454,7,10,989,7,498,78);
console.log(partial3);
console.log(numbers3);

