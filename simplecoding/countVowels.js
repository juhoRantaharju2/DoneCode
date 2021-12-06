
const test = "afoiuymkp";

function getVowelCount(textString){

    let vowels = textString.match(/[aeiouy]/gi);
    
    return vowels;

}

console.log(getVowelCount(test).length);