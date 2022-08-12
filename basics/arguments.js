function add(n1,n2){
    console.log(n1+n2);
    console.log(arguments);
    console.log(arguments[4]);
}

add(12,13,45,89,78);

// arguments is an array-like object