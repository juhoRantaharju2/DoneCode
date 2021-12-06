const a = process.argv[2].toLowerCase();

const splittedtoArray = a.split("");

function isPalindrome(str){

    let reverseStr = str.split('').reverse().join(''); 

    return reverseStr.replace(/\s/g, '') === str.replace(/\s/g, '');
}

if(isPalindrome(a)){

    console.log("Yea, " + a + " is a palindrome");

}else {

    console.log("No, " + a + " is not a palindrome");

}


