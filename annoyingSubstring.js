const stringToBeCut = String(process.argv[2]);

const lastIndex = stringToBeCut.lastIndexOf(" ");

const newString = stringToBeCut.substring(0, lastIndex);

console.log(newString);