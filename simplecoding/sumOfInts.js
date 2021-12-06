const a = Number(process.argv[2]);
let sumOfInts = 0;
let sumOfIntsWhile = 0;

for(i=0;i<=a;i++){

    sumOfInts=i+sumOfInts;

}

console.log(sumOfInts);

let j =0;
while(a>=j){

    sumOfIntsWhile=j+sumOfIntsWhile;
    j++;
}

console.log(sumOfIntsWhile);