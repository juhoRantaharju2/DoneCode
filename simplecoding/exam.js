
const correctAnswers = ["a", "b", "c", "d"];
const studentAnswers = ["a", "b", "b", "d"];
let score = 0;

function checkExam(arrCorrect, arrStudent){

 /*   correctAnswers.forEach((arrStudent) =>{

        console.log(correctAnswers);

    });

*/

    for(i=0; i<arrCorrect.length; i++){

        if(arrCorrect[i] === arrStudent[i]){

            score += 4;

        }else if (arrStudent[i] === ""){

            score += 0;

        }else {

            score -= 1;

        }

    }

    return score;

}

console.log(checkExam(correctAnswers, studentAnswers));