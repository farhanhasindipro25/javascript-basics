function getMin(jim,jenny,john){
    if(jim < jenny && jim < john){
        return "Jim will get punishment";
    }
    else if(jenny < jim && jenny < john){
        return "Jenny will get punishment";
    }
    else{
        return "John will get punishment";
    }
}

const jimMarks = 68;
const jennyMarks = 77;
const johnMarks = 90;

console.log(getMin(jimMarks, jennyMarks, johnMarks));

Math.min(jimMarks, jennyMarks, johnMarks);
