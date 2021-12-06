const a = Number(process.argv[2]);
let sheeps = "";

for(i=0; i<a;i++){

    sheeps += i+1 + " " + "sheep....";

}

console.log(sheeps);