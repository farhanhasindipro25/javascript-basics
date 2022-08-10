function leapYearChecker(year){
    const remainder = year % 4;
    if(remainder === 0){
        return "is a LEAP YEAR!";
    }
    else{
        return "is not a LEAP YEAR!";
    }
}


var year1 = 2022;
console.log(year1);
console.log(leapYearChecker(year1));

var year2 = 2020;
console.log(year2);
console.log(leapYearChecker(year2));

var year3 = 2089;
console.log(year3);
console.log(leapYearChecker(year3));

var year4 = 1960;
console.log(year4);
console.log(leapYearChecker(year4));