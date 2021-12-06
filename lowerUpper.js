const upperOrLower = String(process.argv[2]);
const transform = String(process.argv[3]);

if(upperOrLower === "lower"){

    console.log(transform.toLowerCase());

}else if(upperOrLower === "upper"){

    console.log(transform.toUpperCase());

}