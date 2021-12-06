
const likes = ["juho", "mari", "pöö", "kalle", "kana"];

function like (inArray){

    if(inArray.length === 0){

        console.log("no on likes this");

    } else if(inArray.length === 1){
    
        console.log(inArray[0] + " likes this");
    
    } else if(inArray.length === 1){
    
        console.log(inArray[0] + " likes this");
    
    }else if(inArray.length === 2){
    
        console.log(inArray[0] + " and " + inArray[1]+ " likes this");
    
    }else if(inArray.length === 3){
    
        console.log(inArray[0] + ", " + inArray[1] + " and " + inArray[2]+ " likes this");
    
    }else{
    
        console.log(inArray[0] + ", " + inArray[1] + " and " + (inArray.length-2) + " others likes this");
    
    }

}


like(likes);
