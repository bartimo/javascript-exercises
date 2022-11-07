const sumAll = function(num1, num2) {
    let sum = 0;
    let lowNum = 0;
    let highNum = 0;

    if (arguments.length != 2 ) {
        return "ERROR";
    } 


    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            return "ERROR";
        }
        
        if (typeof(arguments[i]) != 'number') {
          
            return "ERROR";
        }
    }

    if(num2 > num1) {
        highNum = num2;
        lowNum = num1;
    } else {
        highNum = num1;
        lowNum = num2;
    }

    for (i = lowNum; i <= highNum; i++) {
        sum += i;
    }
    return sum

};

console.log(sumAll(1,4));


// Do not edit below this line

module.exports = sumAll;
