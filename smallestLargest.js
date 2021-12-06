const number_1= Number(process.argv[2]);
const number_2 = Number(process.argv[3]);
const number_3 = Number(process.argv[4]);


if (number_1 > number_2 && number_1 > number_3){

    console.log("biggest number 1 " + number_1);

}else if (number_2 > number_1 && number_2 > number_3){
   
    console.log("biggest number 2 " + number_2);

}else{

    console.log("biggest number 3 " + number_3);

}

if (number_1 < number_2 && number_1 < number_3){

    console.log("smallest number 1 " + number_1);

}else if (number_2 < number_1 && number_2 < number_3){
   
    console.log("smallest number 2 " + number_2);

}else{

    console.log("smallest number 3 " + number_3);

}

if(number_1 === number_2 && number_3 === number_1){

    console.log("they are all equal");

}