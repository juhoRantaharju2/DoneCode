


let countdown = function(arg, func){

    setTimeout(() => {
        
        func();

    }, arg);


}



    countdown(1000, () => {

        console.log("Wait a second!");


    });

