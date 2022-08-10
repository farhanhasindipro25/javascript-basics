const lyrics = "Now I'm gone";
const lyrics2 = lyrics.toUpperCase();

console.log(lyrics.includes("gone"));
console.log(lyrics.includes("Gone"));

searchString1 = "GONE";
searchString2 = "Gone";
searchString3 = "GoNe";

console.log(lyrics.includes(searchString1));
console.log(lyrics.includes(searchString1.toLowerCase()));
console.log(lyrics.includes(searchString2.toLowerCase()));
console.log(lyrics2.includes(searchString3.toUpperCase()));