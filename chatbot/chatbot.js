// Do not do the same as this for new bank homework

import readline from "readline-sync";

let name = "";
let counter = 0;
let botsName = "def";

const printHelp = () => {
    console.log("-----------------------------");
    console.log("Here´s a list of commands that I can execute!"); 
    console.log("help: Opens this dialog.");
    console.log("hello: I will say hello to you");
    console.log("botInfo: I will introduce myself");
    console.log("botName: I will tell my name");
    console.log("botRename: You can rename me");
    console.log("forecast: I will forecast tomorrows weather 100% accurately");
    console.log("quit: Quits the program.");
    console.log("-----------------------------");

}

const hello = () =>{

    console.log("Hello! What is your name?");
    name = readline.question(">> ");
    console.log("hello again, " + name);

    counter ++;

}

const botInfo = () =>{

    console.log("I am a dumb chat bot that will do dumb things");
    console.log("Questions asked so far: " + counter);
    counter ++;

}

const botName = () =>{

    console.log("My name is " + botsName + "If you want to change it type botRename.");
    counter ++;

}

const botRename = () =>{

    console.log("Type a new name, please!");
    let newName = readline.question(">> ");
    console.log("Are you happy with the name " + newName);
    let answer = readline.question(">> ");

    if(answer === "yes"){

        console.log("My new name is " + newName);
        name = newName;

    }else{

        console.log("My name was not changed. current name still: " + name);

    }

    counter ++;

}

const forecast= () =>{

    const randomTemperatureNumber = Math.floor(Math.random() * (45-0) + 0);
    const randomCloudy = Math.floor(Math.random() * (1-0) + 0);
    const randomSunny = Math.floor(Math.random() * (1-0) + 0);
    const randomWind = Math.floor(Math.random() * (1-0) + 0);
    
    console.log("Forecast for tomorrow weather is: ");
    console.log("Temperature: " + randomTemperatureNumber + "celcius degree");

    if(randomCloudy === 1){

        console.log("Cloudy: yes");

    } else if(randomCloudy === 0){

        console.log("Cloudy: no");

    }


    if(randomSunny === 1){

        console.log("Sunny: yes");

    } else if(randomSunny === 0){

        console.log("Sunny: no");

    }


    if(randomWind === 1){

        console.log("Wind: yes");

    } else if(randomWind === 0){

        console.log("Wind: no");

    }

    counter ++;
    
}

let running = true;
console.log("Welcome to a weird chatbot!");
while (running) {
    const input = readline.question(">> ");
    if (input === "quit") {
        running = false;
    } else if (input === "help") {
        printHelp();
    }else if (input === "hello") {
        hello();
    }else if (input === "botInfo") {
        botInfo();
    }else if (input === "botName") {
        botName();
    }else if (input === "botRename") {
        botRename();
    }else if (input === "forecast") {
        forecast();
    }
}
