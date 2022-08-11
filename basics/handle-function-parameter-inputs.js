function add(n1, n2){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        return "Invalid input. Please provide a number!";
    }
    else{
        return n1 + n2;
    }
}
console.log(add(12,12));
console.log(add(false,12));
console.log(add(false,"Hey"));
console.log(add(2.08,"Hey"));