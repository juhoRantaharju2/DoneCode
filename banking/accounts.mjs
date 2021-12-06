import readline from "readline-sync";

let loggedin = null;

export const createAccount = (acc) =>{

    let depositAmountforAccountHolder = null;
    let i;

        i = acc.length;

    console.log("Welcome to create account!");
    const accountHolderName = readline.question("What is your name: ");
    
    console.log("Thanks for the name");
    const accountHolderPassword = readline.question("How about password? ");

    const id = Math.floor(Math.random() * (10000-0) + 0);

    console.log("Your new id is: " + id);
    
    console.log("Hey there " + accountHolderName);

    do{

        depositAmountforAccountHolder = readline.question("how much you wanna deposit? (10 dollar min): ");

        if(depositAmountforAccountHolder < 10){

            console.log("deposit amount has to be 10 or more");

        }

    }while(depositAmountforAccountHolder < 10)


     acc[i] = {
        name: accountHolderName,
        password: accountHolderPassword,
        id: id,
        balance: depositAmountforAccountHolder,
        fundRequests: []
     }

     
     return acc;


}


export const closeAccount = (loggedin, acc) => {

    if(loggedin){

        const answer = readline.question("are you sure you want to close your account? (yes/no)");

        if(answer === "yes"){

            let idCorrect = false;
            let pos = 0;

            const closeAccountID = readline.question("what is the account to close ID?");

            for(let i=0; i<acc.length; i++){
        
                if(closeAccountID===JSON.stringify(acc[i].id)){
                    idCorrect=true;}

                if(idCorrect){

                    pos = i;

                }
        
        
            }

            acc.splice(pos, 1);

            console.log("account closed");

        }else{console.log("account not closed")}


    }else{ console.log("not logged in");}


}


export const doesAccountExist = (acc) => {

    let accountExists = false;
    const id = readline.question("what is ur account ID?");

    for(let i=0; i<acc.length; i++){
     
        if (id === JSON.stringify(acc[i].id))
            accountExists = true;
    }

    if(accountExists) console.log("account existis");
    
    else console.log("account does not exist");

}


export const modifyAccount = (logged, acc) => {

    if(logged){

        let pos = 0;
        const id = readline.question("what is ur account ID?");

        for(let i=0; i<acc.length; i++){
     
            if (id === JSON.stringify(acc[i].id))
                pos=i;
        }

        const whatToModify = readline.question("What would you like to modify? select name or password");

         if (whatToModify === "password"){
           const newPassword = readline.question("what would be ur new password?");
           acc[pos].password = newPassword;

         }else if (whatToModify === "name"){
            const newName = readline.question("what is ur new name?");
            acc[pos].name = newName;
         }


        else {console.log("no such thing to modify");}

    }

     else console.log("not logged in");


}



