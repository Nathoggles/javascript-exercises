const ages = [];
const findTheOldest = function(people) { 
    people.forEach((element) => {
    let age = element.yearOfDeath - element.yearOfBirth;
        ages.push(age);
    console.log(age);
});
console.log(ages);
let maxAge = Math.max(...ages);
console.log(maxAge);
    people.forEach((element) => {
        let age = element.yearOfDeath - element.yearOfBirth;
        if (maxAge == age){
         oldest = element;
        }
    });
    return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
