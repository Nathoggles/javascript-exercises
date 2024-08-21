const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

const palindromes = function (string) {
    const cleansedArray = [];
    let arrayOfString = Array.from(string.toLowerCase());
    arrayOfString.forEach((element) => {
    if (alphanumerical.includes(element)){
        cleansedArray.push(element);
    }
});
reversedCleansedArray = cleansedArray.toReversed();
if (reversedCleansedArray.toString() == cleansedArray.toString() ){
    return true;
} else {return false}
};
// Do not edit below this line
module.exports = palindromes;
