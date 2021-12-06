const competitors = ['Julia', "Mark", "Spencer", "Ann" , "John", "Joe"]; 
const ordinals = ['st', 'nd', 'rd', 'th'];

for(i=0; i<competitors.length; i++){

    if(i===0){

        console.log("1" + ordinals[0] + " competitor was " + competitors[0]);

    }else if (i===1){

        console.log("2" + ordinals[1] + " competitor was " + competitors[1]);

    }else if (i===2){

        console.log("3" + ordinals[2] + " competitor was " + competitors[2]);

    }else{

        console.log(i+1 + ordinals[i] + " competitor was " + competitors[i]);

    }


    

}