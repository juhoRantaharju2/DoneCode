import './App.css';
import React, { useState } from "react";


/*funktio applicationCache() {

  const[numbers, setNumbers] = useState([]);

    //käytetään jossain kohdin jollakin tavalla sovelluskesssa
    setNumbers(numbers.concat(1));
    //numbers = [0,1];
}*/
function App() {

  const[numbers, setNumbers] = useState([]);

const NewNumber = () =>{
  
  let isNumber = false;
  //let numbers = [];
  //const[numbers, setNumbers] = useState([]);
  let newNumber = Math.round(Math.random() * (80 - 1) + 1);

  console.log(newNumber);

  for (let i = 0; i < numbers.length; i++){

    if(numbers[i] === newNumber){

      isNumber = true;

    }
    //this will not work   
    //numbers[numbers.length] = newNumber;
  


  }

  if(!isNumber){
    setNumbers(numbers.concat(newNumber));
  }

   //return (<div><p>number: {numbers[numbers.length-1]}</p></div>);
}

//appi on komponentti joka palauttaa html tai jsx:ää

// button.addEventListerner('click', newnumber); samanlainen
//call backing kuatta jos tarvii välittää jotain funktiolle
//numbers.map // <p>{numbers}</p>

  return (
    <div className="App">
          <button onClick={NewNumber}>get a new number</button>
          {
          numbers.map((number, i) => {

            return <p>{number}</p>

          })}
    </div>
  );
}

export default App;
