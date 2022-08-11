function reverseString(text){
    let reversedSentence = '';
    for(let i = text.length-1 ; i >= 0 ; i--){
        const element = text[i];
        reversedSentence += element;
        console.log(element);
    }
    return reversedSentence;
}

const myString = "Alkaline Foster";
const reversed = reverseString(myString);
console.log("Reversed Sentence:", reversed);