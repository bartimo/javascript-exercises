const ftoc = function(temp_f) {
  return roundToOne((temp_f - 32) / 1.8);

};

const ctof = function(temp_c) {
  return roundToOne((temp_c *9/5) +32);
};

function roundToOne(num) {
  return Math.round(num * 10) / 10
}

console.log(ctof(212));
console.log(ftoc(22))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
