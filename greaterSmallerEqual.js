const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = String(process.argv[4]);

if(a>b){

    console.log("a is greater");

}else if(a<b){

    console.log("b is greater");

}else if (a === b && c === "hello world") {

    console.log("yay you guessed the password");

}else {

    console.log("they are equal");

}