// Inches to Feet Conversion
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
// Feet to Inches Conversion
function feetToInches(feet){
    const inches = feet * 12;
    return inches;
}
// Miles to Kilometer Conversion
function milesToKM(miles){
    const km = miles * 1.60934;
    return km;
}
// Kilometer to Miles Conversion
function kmToMiles(km){
    const miles = km / 1.60934;
    return miles;
}

console.log(".....INCHES TO FEET CONVERSION.....");
console.log();

const xInches = 144;
const xFeets = inchToFeet(xInches);
console.log("Value of", xInches ,"Inches converted to feet is:",xFeets, "Feets.");
const yInches = 123;
const yFeets = inchToFeet(yInches);
console.log("Value of", yInches ,"Inches converted to feet is:",yFeets, "Feets.");
const zInches = 269;
const zFeets = inchToFeet(zInches);
console.log("Value of", zInches ,"Inches converted to feet is:",zFeets, "Feets.");

console.log();
console.log("......FEETS TO INCHES CONVERSION.....");
console.log();

const aFeet = 1;
const aInches = feetToInches(aFeet);
console.log("Value of", aFeet ,"Feet converted to inches is:",aInches, "Inches.");

const bFeet = 13;
const bInches = feetToInches(bFeet);
console.log("Value of", bFeet ,"Feet converted to inches is:",bInches, "Inches.");

const cFeet = 52;
const cInches = feetToInches(cFeet);
console.log("Value of", cFeet ,"Feet converted to inches is:",cInches, "Inches.");

console.log();
console.log(".....MILES TO KILOMETER CONVERSION.....");
console.log();

const aMiles = 52;
const aKM = milesToKM(aMiles);
console.log("Value of", aMiles ,"Miles converted to kilometers is:",aKM, "Kilometers.");
const bMiles = 15;
const bKM = milesToKM(bMiles);
console.log("Value of", bMiles ,"Miles converted to kilometers is:",bKM, "Kilometers.");
const cMiles = 152;
const cKM = milesToKM(cMiles);
console.log("Value of", cMiles ,"Miles converted to kilometers is:",cKM, "Kilometers.");

console.log();
console.log(".....KILOMETERS TO MILES CONVERSION.....");
console.log();

const xKM = 152;
const xMiles = kmToMiles(xKM);
console.log("Value of", xKM ,"kilometers converted to miles is:",xMiles, "Miles.");
const yKM = 24;
const yMiles = kmToMiles(yKM);
console.log("Value of", yKM ,"kilometers converted to miles is:",yMiles, "Miles.");
const zKM = 3;
const zMiles = kmToMiles(zKM);
console.log("Value of", zKM ,"kilometers converted to miles is:",zMiles, "Miles.");