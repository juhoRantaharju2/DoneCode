const operator = String(process.argv[2]);
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

function plus(number1, number2){

    return number1 + number2;

}

function minus(number1, number2){

    return number1 - number2;

}

function multiplication(number1, number2){

    return number1 * number2;

}

function division(number1, number2){

    return number1 / number2;

}

if (operator === "+"){

    console.log(plus(firstNumber, secondNumber));

}else if (operator === "-"){

    console.log(minus(firstNumber, secondNumber));

}else if (operator === "*"){

    console.log(multiplication(firstNumber, secondNumber));

}else if (operator === "/"){

    console.log(division(firstNumber, secondNumber));

}else {

    console.log("no such operator");

}