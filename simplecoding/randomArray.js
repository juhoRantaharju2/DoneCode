let testArray = [1, 2 , 3, 4, ,5 ,6, 7, 8, 9];

let currentIndex = testArray.length, temporaryValue, randomIndex;

while (0 !== currentIndex) {

  let randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  let temporaryValue = testArray[currentIndex];
  testArray[currentIndex] = testArray[randomIndex];
  testArray[randomIndex] = temporaryValue;
}

console.log(testArray);