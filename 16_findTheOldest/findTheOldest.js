const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    people.sort((a, b) => {
        let ageA = (('yearOfDeath' in a) ? a.yearOfDeath : currentYear) - a.yearOfBirth;
        let ageB = (('yearOfDeath' in b) ? b.yearOfDeath : currentYear) - b.yearOfBirth;
        return ageB - ageA;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
