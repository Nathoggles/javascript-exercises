const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    } else if (typeof num1 != "number" || typeof num2 != "number"){
        return "ERROR";
    } else if (num1 > num2) {
        numL = num1;
        numS = num2;
    } else {
        numL = num2;
        numS = num1;
    }
        let i = numL;
        let sum = 0;
        while (i >= numS){
            console.log(i);
            sum += i;
            i--;
        }
        return sum;
}

// Do not edit below this line
module.exports = sumAll;
