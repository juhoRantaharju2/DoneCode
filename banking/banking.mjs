import readline from "readline-sync";
import {login, logout} from './logInOut.mjs';
import {createAccount, closeAccount, doesAccountExist, modifyAccount} from './accounts.mjs';
import {withdrawFunds, depositFunds, transferFunds, requestFunds, fundsRequests, 
    acceptFundsRequests} from './funds.mjs';
import fs from "fs";


console.log("welcome to banking bank CLI"); 

let running = true;
let accounts = [];
let loggedIn=false;

const readAccountsFromFile = () =>{

    try{

            const data = fs.readFileSync("./accounts.json", "utf8");
            accounts = JSON.parse(data);

    }catch (e){

        console.log("something went wrong");

    }

}


const writeAccounts = () =>{
        
    fs.writeFileSync("./accounts.json", JSON.stringify(accounts), "utf8", (err) =>{

        if(err){

                HTMLFormControlsCollection.log("could not save accounts");

        }

    });   
}


const help = () =>{


    console.log("I'm glad to help! Here is a list of commands"); 

    console.log(""); 

    console.log("Accounts"); 
    console.log("createAccount -- > Opens dialog for creating an account"); 
    console.log("closeAccount -- > Opens a dialog for closing an account."); 
    console.log("modifyAccount -- > Opens a dialog for modifying an account."); 
    console.log("doesAccountExist -- > Opens a dialog for checking if the account exists."); 
    console.log("login -- > Opens a dialog for logging in."); 
    console.log("logout -- > Opens a dialog for logging out."); 

    console.log("");

    console.log("Funds"); 
    console.log("withdrawFunds -- > Opens a dialog for withdrawing funds."); 
    console.log("depositFunds -- > Opens a dialog for depositing funds."); 
    console.log("transferFunds -- > Opens a dialog for transferring funds to another account."); 

    console.log(""); 

    console.log("Requests"); 
    console.log("requestFunds -- > Opens a dialog for requesting another user for funds."); 
    console.log("fundRequests -- > Shows all the requests for the account funds."); 
    console.log("acceptFundRequest -- > Opens a dialog for accepting a fund request.");
}


const choice = (answ) =>{

    const choices = {

        "login": () => loggedIn = login(accounts),
        "logOut": () => loggedIn = logout(),
        "help": () => help(),
        "createAccount": () => createAccount(accounts),
        "closeAccount": () => closeAccount(loggedIn, accounts),
        "modifyAccount": () => modifyAccount(loggedIn, accounts),
        "doesAccountExist": () => doesAccountExist(accounts),
        "withdrawFunds": () => withdrawFunds(loggedIn, accounts),
        "depositFunds": () => depositFunds(loggedIn, accounts),
        "transferFunds": () => transferFunds(loggedIn, accounts),
        "requestFunds": () => requestFunds(loggedIn, accounts),
        "fundRequests": () => fundsRequests(loggedIn, accounts),
        "acceptFundRequests": () => acceptFundsRequests(loggedIn, accounts),
        "quit": () => running=false,
        "default": () => "not applicable",

    };

    return choices[answ] ? 
            choices[answ]() : 
            choices["default"]();

}


while (running){

    readAccountsFromFile();

    const answer = readline.question("Give your command: ");
    choice(answer);

    writeAccounts();

 
}