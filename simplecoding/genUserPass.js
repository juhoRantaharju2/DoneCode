const name = String(process.argv[2]);

const randomNumberForSpecial = Math.floor(Math.random() * (47-33) + 33);
const randomNumberForLetter = Math.floor(Math.random() * (90-65) + 65);
/*
console.log(randomNumber);
console.log(new Date().getFullYear().toString().substr(-2));
*/

function makeUsername(userName){

    nameArray = userName.split(" ");
    year = new Date().getFullYear().toString().substr(-2);
    firstNameTwo = "";
    lastNameTwo = "";


    for(i=0; i<2; i++){

        firstNameTwo += nameArray[0].toLowerCase().charAt(i);
        lastNameTwo += nameArray[1].toLowerCase().charAt(i);


    }

    return "B" + year + firstNameTwo + lastNameTwo; 
    
    //nameArray[0].toLowerCase().charAt(0) + nameArray[1].toLowerCase().substr(-2); 

}

function makePassword(userName){

    randomLetter = String.fromCharCode(randomNumberForLetter);
    specialChar = String.fromCharCode(randomNumberForSpecial);
    year = new Date().getFullYear().toString().substr(-2);
    nameArray = userName.split(" ");
    firstNameLetter = nameArray[0].toLowerCase().charAt(0);
    lastNameLetter = nameArray[1].toUpperCase().charAt(nameArray[1].length-1);

    return randomLetter + firstNameLetter + lastNameLetter + specialChar 
            + year;

}


console.log("Your username is: " + makeUsername(name));
console.log("Your password is: " + makePassword(name));