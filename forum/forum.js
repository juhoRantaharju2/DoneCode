import readline from "readline-sync";

//Pitää miettiä lisää miten tätä käyttää

let username = "juho";
let post = "something something";

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

console.log(username);
console.log(post);

const forumForm = document.querySelector("#forumForm");

forumForm.addEventListener("submitted", (e)=> {

    e.preventDefault;

    username = document.getElementById("#username");
    post = document.getElementById("#post");

    console.log("username: ", username.value);
    console.log("post: ", post.value);

});

username = document.getElementById("username").value;
post = document.getElementById("post").value;

console.log("username: " + username);
console.log("post: " + post);

console.log(username);
console.log(post);

console.log("kakfao");