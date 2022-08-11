function getMax(jim,jenny,john){
    if(jim > jenny && jim > john){
        return "Jim will get the cake!";
    }
    else if(jenny > jim && jenny > john){
        return "Jenny will get the cake!";
    }
    else{
        return "John will get the cake!";
    }
}


const jimMarks = 68;
const jennyMarks = 77;
const johnMarks = 90;

console.log(getMax(jimMarks, jennyMarks, johnMarks));

Math.max(jimMarks, jennyMarks, johnMarks);
