const balance = 200;
const isActive=true;
const checkBalance= true;

if(checkBalance === true){

    if(isActive === true && balance > 0){

        console.log("balance is " + balance);

    }else{

        if(isActive===false){


            console.log("your account is not active");

        }else{

            if(balance>=0){

                console.log("your account is empty");

            }else{

                console.log("your balance is negative");

            }

        }  

    }

}else{

    console.log("have a nice day");

}