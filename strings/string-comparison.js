const userName = 'blackPink';
const userInput = "BlackPink";

// if(userName === userInput){
//     console.log("VALID USER");
// }
// else{
//     console.log("INVALID USER")
// }

if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log("VALID USER");
}
else{
    console.log("INVALID USER")
}

console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
console.log(userName.toLocaleUpperCase());