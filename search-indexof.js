const lyrics = "Now I'm gone";

console.log(lyrics.indexOf("I'm")); // 4
console.log(lyrics.indexOf("I am")); // -1
console.log(lyrics.indexOf("N")); // 0
console.log(lyrics.indexOf("Now")); // 0


function findIndexOfString(s){
    if(lyrics.indexOf(s) !== -1){
        console.log(s,": exists inside string");
    }
    else{
        console.log(s,": doesn't exist inside string");
    }
}

const searchString1 = "I'm gone";
findIndexOfString(searchString1);
const searchString2 = "I'm Here";
findIndexOfString(searchString2);