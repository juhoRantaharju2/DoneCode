
const calculator = document.querySelector('calculator');

let x = document.getElementById("myBtn1").textContent;
//const keys = calculator.querySelector();

//console.log(x);

//function onClick = () => {
let b = document.getElementById("myBtn2").textContent;
//const keys = calculator.querySelector();

function onClick(event){

    event.preventDefault();

c = event.target['myBtn1'].value;
d = document.getElementById("myBtn1").textContent;

console.log(c);
console.log(d);

}
//console.log(b);


/*calculator.addEventListener('click', e => {
    if (e.target.matches('button')) {
      // Do something
    }
   });

const key = e.target;

console.log(key);
*/
//let one, two, three, four, five, six, seven, eight, nine, zero;

//one = document.getElementById("myBtn1").onclick;
//console.log(one);

//function() {console.log("1 pressed");};

//Elemntin arvoon pääseminen textContent;

// muuntaminen integeriksi. Number funktio tai Stringin edesä plussaa