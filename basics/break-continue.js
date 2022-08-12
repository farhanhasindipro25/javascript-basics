// break - stops the loop after the mentioned range

for (let i = 0 ; i <= 20 ; i++){
    console.log(i);
    if(i > 5){
        break;
    }
}

console.log();
// continue - skips values within the loop after the mentioned range

for (let i = 0 ; i <= 10 ; i++){
    if(i > 8){
        continue;
    }
    console.log(i);
}