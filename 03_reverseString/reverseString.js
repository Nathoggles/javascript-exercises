const reverseString = function(input) {
    let tempArray = input.split("");
    tempArray.reverse();
    let reversedString = tempArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
