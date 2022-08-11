function reverseWords(str){
    const words = str.split(' ');
    const result = [];

    for(let i = words.length-1 ; i >= 0 ; i--){
        const element = words[i];
        result.push(element);
    }
    console.log(result);
    const reversedWords = result.join(' ');
    return reversedWords;
}

const myString = "My name is Farhan Hasin Dipro";
console.log(reverseWords(myString));