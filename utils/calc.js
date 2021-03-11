


 const calcProcess = (operator, operand1 , operand2 ) => {

  // A placeholder for the result of the calculation.
let result;

// A closed if/else chain for each of the supported operations.
if (operator === 'add') {

  result = operand1 + operand2;

} else if (operator === 'subtract') {

  result = operand1 - operand2;

} else if (operator === 'multiply') {

  result = operand1 * operand2;

} else if (operator === 'divide') {

  result = operand1 / operand2;

} else {

  console.log('Invalid operator');

}

return result;

}


module.exports = {calcProcess};