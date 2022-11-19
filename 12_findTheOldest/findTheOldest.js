

const findTheOldest = function(person) {
    return person.reduce((oldest,current) => {
        if(!oldest.yearOfDeath) {
            oldest.yearOfDeath = new Date().getFullYear();
        }
        if(!current.yearOfDeath) {
            current.yearOfDeath = new Date().getFullYear();
        }
        return (current.yearOfDeath - current.yearOfBirth >  oldest.yearOfDeath - oldest.yearOfBirth ? current : oldest) })
    };


// Do not edit below this line
module.exports = findTheOldest;
