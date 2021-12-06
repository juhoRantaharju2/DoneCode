import readline from "readline-sync";

export const withdrawFunds = (loggedIn, acc) => {

    if(loggedIn){ 

        const id = readline.question("what is ur account ID?");
        const amount = readline.question("How much to take?");


        for(let i=0; i<acc.length; i++){
        
            if(id===JSON.stringify(acc[i].id)){
                acc[i].balance -= amount;}
    
        }

        console.log("amount taken");

    
    }else{

        console.log("sorry u are not logged in!");

    }


}

export const depositFunds = (LoggedIn, acc) => {

    if(LoggedIn){ 

        const id = readline.question("what is ur account ID?");
        const amount = readline.question("How much to deposit?");


        for(let i=0; i<acc.length; i++){
        
            if(id===JSON.stringify(acc[i].id)){
                acc[i].balance += amount;}
    
        }

        console.log("amount deposited");
    
    }else{

        console.log("sorry u are not logged in!");

    }


}

export const transferFunds = (LoggedIn, acc) => {

    if(LoggedIn){ 

        const id = readline.question("what is ur account ID?");
        const transferAmount = readline.question("How much to transfer?");
        const transferToId = readline.question("which id to transfer to?");

        for(let i=0; i<acc.length; i++){
        
            if(id===JSON.stringify(acc[i].id)){
                acc[i].balance -= transferAmount;}
    
        }

        for(let i=0; i<acc.length; i++){
        
            if(transferToId===JSON.stringify(acc[i].id)){
                acc[i].balance += transferAmount;}
    
        }
    
    }else{

        console.log("sorry u are not logged in!");
    
    }
}

export const requestFunds = (LoggedIn, acc) => {

    if(LoggedIn){ 

        const id = readline.question("what is ur account ID?");
        const requestedFromAccountID = readline.question("what is the acconut to request from?");
        const requestAmonut = readline.question("How much to request?");

        for(let i=0; i<acc.length; i++){
        
            if(requestedFromAccountID===JSON.stringify(acc[i].id)){
                acc[i].fundsRequests = [requestedFromAccountID, id, requestAmonut]}
    
        }

    }else{

        console.log("sorry u are not logged in!");

    }

}

export const fundsRequests = (LoggedIn, acc) => {


    if(LoggedIn){ 

        const userId = readline.question("give ur Id?");
        let fundRequests = [];

        for(let i=0; i<acc.length; i++){
        
            if(userId===JSON.stringify(acc[i].id)){
                fundRequests = acc[i].fundsRequests;}
    
        }

        console.log("Here are your requests!");
        console.log(fundRequests);
        
    }else{

        console.log("sorry u are not logged in!");

    }
}

export const acceptFundsRequests = (LoggedIn, acc) => {

    //here a code to accept

    if(LoggedIn){ 

        const userId = readline.question("give ur Id?");


        for(let i=0; i<acc.length; i++){
        
            if(userId===JSON.stringify(acc[i].id)){

                acc[acc[i].fundsRequests[1]] += acc[i].fundsRequests[2];
                acc[i].balance -= acc[i].fundsRequests[2];
            
            }
    
        }
        
    }else{

        console.log("sorry u are not logged in!");

    }

}