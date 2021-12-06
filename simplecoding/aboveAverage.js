let avr = 0;
let biggestNumberInArray = 0;

function filterRange(arr, a, b) {

    return arr.filter(item => (a <= item && item <= b));
  }

function aboveAverage(inArray){


    for (i=0; i<inArray.length; i++){

        avr += inArray[i];

        if(inArray[i]>biggestNumberInArray){

            biggestNumberInArray = inArray[i];

        }

    }

    avr = avr / inArray.length;

    biggestNumberInArray = biggestNumberInArray + 1;

    let aboveArray = filterRange(inArray, avr, biggestNumberInArray);

    return aboveArray;

}


console.log(aboveAverage([1, 5, 9, 3, 10, 4, 7, 8, 11]));

console.log(avr);