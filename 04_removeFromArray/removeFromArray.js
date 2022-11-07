const removeFromArray = function(arr,) {
    for (let i=1; i < arguments.length; i++) {
        if (arr[arr.indexOf(arguments[i])] === arguments[i]) {
            let retVal = arr.splice(arr.indexOf(arguments[i]),1) 
        }
    }
    return arr;
};


/* debug code
let testArray = [1,2,3,4,5];
let t = removeFromArray(testArray,2,4,100);
console.log(t);
*/




// Do not edit below this line
module.exports = removeFromArray;
