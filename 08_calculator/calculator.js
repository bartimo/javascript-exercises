const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
  let sum = 0;
  a.forEach(element => {
    sum = sum + element;
  })
  return sum;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(element => {
     total = total * element;
  });
  return total;
};

const power = function(a,b) {
  let total = 1;
  for(let x=1; x<=b; x++) {
    total = total * a;
  }
  return total;

};

const factorial = function(a) {
  if(a != 0) {
    let total = 0;
    for(let x=a-1; x>=1; x--) {
      a = a * x;
    }
  } else {
    a = 1;
  }
  return a;
};

const x = factorial(5);
console.log(x);



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

