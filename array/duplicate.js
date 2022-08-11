function removeDuplicate(names){
    const unique = [];
    for(let i = 0 ; i < names.length ; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const names = ['A','B','C','D','D','E','G','F','G','H','I','A','I','C','X','Y','F','X','Z','J','K','L','M','L','M','N','O','P','N','Q','P','R','T','S','B','T','T','U','V','X','W'];
console.log(names);
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
