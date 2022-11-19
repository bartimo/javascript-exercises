const palindromes = function(a) {
    let str = a.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(' ','').split("");
    len = str.length
    
    for(let x = 0; x < len; x++) {
        console.log(`${str[x]} = ${str[len-x-1]}`)
        if(str[x] !== str[len-x-1]) {
            return false
        }
    }
    return true;
};

console.log(palindromes("racecara"));
// Do not edit below this line
module.exports = palindromes;
