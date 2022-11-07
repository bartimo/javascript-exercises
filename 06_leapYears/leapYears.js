const leapYears = function(year) {
    let leapYear = true;
    
    if (year % 4 != 0) {
        leapYear = false;
    }

    if (year % 100 == 0 && year % 400 != 0) {
        leapYear = false;
    }

    return leapYear;

};

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
