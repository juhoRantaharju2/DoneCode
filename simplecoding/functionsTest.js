function stringToUpper(nameOfTheString){

    nameOfTheString = nameOfTheString.charAt(0).toUpperCase();
    
    return nameOfTheString;

}

function randomNumbersMinMax(number1, number2){

    let randomNumber = math.random() * (max - min) + min;
   
    return randomNumber;

}