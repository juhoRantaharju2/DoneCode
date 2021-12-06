const name_1 = String(process.argv[2]);
const name_2 = String(process.argv[3]);
const name_3 = String(process.argv[4]);

const name_1_length = name_1.length;
const name_2_length = name_2.length;
const name_3_length = name_3.length;

if(name_1_length>name_2_length && name_1_length > name_3_length){


    if(name_2_length>name_3_length){

        console.log(name_1 + " " + name_2 + " " + name_3);

    }else{

        console.log(name_1 + " " + name_3 + " " + name_2);
    }


}else if(name_2_length>name_1_length && name_3_length>name_1_length){

    if(name_1_length>name_3_length){

        console.log(name_2 + " " + name_1 + " " + name_3);

    }else{

        console.log(name_2 + " " + name_3 + " " + name_1);
    }

}else{

    if(name_2_length>name_1_length){

        console.log(name_3 + " " + name_2 + " " + name_1);

    }else{

        console.log(name_3 + " " + name_1 + " " + name_2);
    }

}


