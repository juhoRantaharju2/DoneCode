import readline from "readline-sync";

export const login = (acc) => {

    let idCorrect = false;
    let nameCorrect = false;
    let passCorrect = false;

    const id = readline.question("what is ur account ID?");
    const name = readline.question("what is ur name?");
    const password = readline.question("what is ur password?");

    for(let i=0; i<acc.length; i++){
        
        if(id===JSON.stringify(acc[i].id)){
            idCorrect=true;}

        if(JSON.stringify(name)===JSON.stringify(acc[i].name)){
            nameCorrect=true;}
        
        if(JSON.stringify(password)===JSON.stringify(acc[i].password)){
            passCorrect=true;}

    }

  
    console.log(idCorrect);
    console.log(nameCorrect);
    console.log(passCorrect);

    if(idCorrect && nameCorrect && passCorrect){
    
        console.log("login accepted");
        return true;}

    else{

        console.log("You got incorrect information. Login rejected. Try again!");
        return false;

    }

}


export const logout = () => {

    const answer = readline.question("Wanna logout? yes/no");

    if(answer==="yes"){
    return false;}

    else return true;

}