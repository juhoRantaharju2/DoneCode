const a = String(process.argv[2]);


const reversedString = a.split("").reverse().join("").split(" ").reverse().join(" ");

console.log(reversedString);