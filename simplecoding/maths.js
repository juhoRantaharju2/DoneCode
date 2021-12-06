const firstNumber = Number(process.argv[2]);
let index = 1;



function calculateToOne(number1){//calculate to 1

    do{   

        if (number1 === 1){

            console.log(index + ": " + number1 + " is already 1");

        } else if (number1 % 2 !== 0){

            let newNumber = number1*3+1;

            console.log(index + ": " + number1 + " is odd -> n = " + number1 + " * 3 + 1 = " + newNumber);

            number1=newNumber;

        } else if(number1 % 2  === 0){

            let newerNumber = number1 / 2;

            console.log(index + ": " + number1 + " is even -> n = " + number1 + " / 2 = " + newerNumber)

            number1=newerNumber;
        }

        index++;

    }while(number1 > 1)

}

calculateToOne(firstNumber);