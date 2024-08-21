const removeFromArray = function removeArray(array, ...inpArgument){
    let arrayOfInpArgument = Array.from(inpArgument);
    console.log(arrayOfInpArgument); 

    let e = arrayOfInpArgument.length;
    console.log(arrayOfInpArgument.length);
    while (e >= 0) {

    let i = array.length;
        while (i >= 0) {
            if (array[i] === arrayOfInpArgument[e])
            {
                array.splice(i, 1);
                i--;
            }
        else {i--; }
        }
    e--;
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
