const firstNumber = Number(process.argv[2]);
const secondNumber = Number(process.argv[3]);

let numberArray = [];

if (firstNumber < secondNumber){
    
    for (i=firstNumber; i<=secondNumber; i++){

        numberArray.push(i);
    }

}else{ 
    

    for (i=firstNumber; i>=secondNumber; i--){

        numberArray.push(i);

    }
}

console.log(numberArray);
