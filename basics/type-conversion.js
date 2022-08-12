// parseInt()

var a = 5;
var b = '6';
var b1 = parseInt(b);

var c = a + b;
var c1 = a + b1;
console.log("Implicit Conversion:",c);
console.log("Converted string to int",c1);

var c = 5;
var d = 4.5;
var d1 = parseInt(d);

var e = c + d;
var e1 = c + d1;
console.log("Implicit Conversion:",e);
console.log("Converted string to int",e1);

//parseFloat()
var f = 5.5;
var g = '4.5';
var g1 = parseFloat(g);

var h = f + g;
var h1 = f + g1;
console.log("Implicit Conversion:",h);
console.log("Converted string to float",h1);

