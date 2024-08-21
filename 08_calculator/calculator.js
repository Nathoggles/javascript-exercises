const add = function(addX, addY) {
  return 	addX + addY;
};


const sum = function(array) {
  let sumOfArray = 0;
  let i = array.length - 1;
  while (i >= 0) {
      sumOfArray += array[i];
      i--;
  }
  return sumOfArray;
};



const factorial = function(integer) {
  if (integer === 0){
      return factorialCalc = 1;
  }
  else {let factorialCalc = 1;
  for (let i = 2; i <= integer; i++){
       factorialCalc *= i;
  }
  return factorialCalc;
}
}
;

/*const add = function() {
	
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
