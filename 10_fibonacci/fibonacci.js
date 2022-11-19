const fibonacci = function(num) {  
    if(num > 0) {
        let fib = [0,1]; //starting array
        for(let x = 1; x < num; x++){
            fib.push(fib[x-1] + fib[x]);
        }
        //console.log(fib);
        return(fib[num]);
        console.log(fib);
    } else {
        return "OOPS";
    }
  
};

console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
