// Problem 01
function radianToDegree(radian){
    // Checking for invalid inputs
    if(typeof radian !== 'number'){
        return "Invalid input. Please provide an integer number!";
    }
    else{    
        // Formula: 1 radian = (180/PI) degrees
        // x radians = (180/PI) * x degrees
        let degree = radian * (180/(Math.PI));
        degree = degree.toFixed(2);
        degree = parseFloat(degree);
        return degree;
    }
}
// const radian1 = 10;
// console.log(radianToDegree(radian1));
// const radian2 = 25;
// console.log(radianToDegree(radian2));
// const radian3 = 199;
// console.log(radianToDegree(radian3));
// const radian4 = false;
// console.log(radianToDegree(radian4));


// Problem 02
function isJavaScriptFile(string){
    // Checking for invalid inputs
    if(typeof string !== 'string'){
        return "Invalid input. Please provide a file name with extensions!";
    }
    else{
        if(string.endsWith('.js')){
            return true;
        }
        else{
            return false;
        }
    }
}
// const file1 = "app.js";
// console.log(isJavaScriptFile(file1));
// const file2 = "js.png";
// console.log(isJavaScriptFile(file2));
// const file3 = "image.js.png";
// console.log(isJavaScriptFile(file3));
// const file4 = "image.jpg.js";
// console.log(isJavaScriptFile(file4));
// const file5 = 56;
// console.log(isJavaScriptFile(file5));


// Problem 03
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    // Checking for invalid inputs
    if((typeof dieselQuantity !== 'number') || (typeof petrolQuantity !== 'number') || (typeof octaneQuantity !== 'number')) {
        return "Invalid input. Please provide an integer number!";
    }
    else{
        const dieselPricePerLitre = 114;
        const petrolPricePerLitre = 130;
        const octanePricePerLitre = 135;
    
        totalDieselPrice = dieselQuantity * dieselPricePerLitre;
        totalPetrolPrice = petrolQuantity * petrolPricePerLitre;
        totalOctanePrice = octaneQuantity * octanePricePerLitre;
        totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
        return totalOilPrice;
    }
}
// console.log(oilPrice(1,1,1));
// console.log(oilPrice(30,20,10));
// console.log(oilPrice(1,0,2));
// console.log(oilPrice(0,2,3));
// console.log(oilPrice("Octane",true,3.05));


// Problem 04
function publicBusFare(totalPassengers){
    // Checking for invalid inputs
    if(typeof totalPassengers !== 'number'){
        return "Invalid input. Please provide an integer number!";
    }
    else{
        const publicBusFare = 250;
        const privateBusSeats = 50;
        const microBusSeats = 11;
        const noOfPrivateBuses = Math.floor(totalPassengers / privateBusSeats);
        // console.log("No of private buses:", noOfPrivateBuses);
        const firstRemaining = totalPassengers - (noOfPrivateBuses * 50);
        // console.log("First Remaining",firstRemaining);
        noOfMicroBuses = Math.floor(firstRemaining/microBusSeats);
        // console.log("No of micro buses:", noOfMicroBuses);
        const remainingForPublicBus = firstRemaining - (noOfMicroBuses * 11);
        // console.log("Public Bus Passengers:",remainingForPublicBus);

        const totalPublicBusFare = remainingForPublicBus * publicBusFare;
        return totalPublicBusFare;
    }
}

// const totalPassengers1 = 50;
// console.log(publicBusFare(totalPassengers1));
// const totalPassengers2 = 55;
// console.log(publicBusFare(totalPassengers2));
// const totalPassengers3 = 112;
// console.log(publicBusFare(totalPassengers3));
// const totalPassengers4 = 235;
// console.log(publicBusFare(totalPassengers4));
// const totalPassengers5 = 365;
// console.log(publicBusFare(totalPassengers5));
// const totalPassengers6 = "Three hundred Sixty Five";
// console.log(publicBusFare(totalPassengers6));


// Problem 05
function isBestFriend(person1, person2){
    // Checking for invalid inputs
    if((typeof person1 !== 'object') || (typeof person2 !== 'object')){
        return "Invalid input. Please provide an object!";
    }
    else{
        if((person1.name === person2.friend) && (person2.name === person1.friend)){
            return true;
        }
        else{
            return false;
        }
    }
}
const person1 = {
    name: 'abul',
    friend: 'babul'
}
const person2 = {
    name: 'babul',
    friend: 'abul'
}
console.log(isBestFriend(person1,person2));

const person3 = {
    name: 'abul',
    friend: 'kabul'
}
const person4 = {
    name: 'kabul',
    friend: 'sabul'
}
console.log(isBestFriend(person3,person4));

const person5 = {
    name: 'doe',
    friend: 'alex'
}
const person6 = {
    name: 'john',
    friend: 'doe'
}
console.log(isBestFriend(person5,person6));

console.log(isBestFriend(5,6));