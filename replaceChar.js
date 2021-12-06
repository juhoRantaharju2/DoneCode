const charToBeReplaced = String(process.argv[2]);
const CharToReplaceWith = String(process.argv[3]);
const stringForReplacing = String(process.argv[4]);


const stringReplaced = stringForReplacing.split(charToBeReplaced).join(CharToReplaceWith);

console.log(stringReplaced);
