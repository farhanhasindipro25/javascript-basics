const lyrics = "Now I'm gone";

console.log(lyrics.startsWith("I'm")); // false
console.log(lyrics.startsWith("I am")); // false
console.log(lyrics.startsWith("N")); // true
console.log(lyrics.startsWith("Now")); // true
console.log();
console.log(lyrics.endsWith("I'm")); // false
console.log(lyrics.endsWith("I am")); // false
console.log(lyrics.endsWith("e")); // true
console.log(lyrics.endsWith("gone")); // true


function checkFileName(fileName){
    if(fileName.endsWith(".pdf")){
        return "OPEN IN ADOBE ACROBAT";
    }
    else if(fileName.endsWith(".ai")){
        return "OPEN IN ADOBE ILLUSTRATOR";
    }
}

const fileName1 = "cv.pdf";
const fileName2 = "portfolio.ai";
console.log(checkFileName(fileName1));
console.log(checkFileName(fileName2));

