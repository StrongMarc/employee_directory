import React from "react";

const name = "Marc Alexander Strong";
const numLetter = 4;
const thoughts = "is wonderful";

function novowel (name){
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = "";

  for ( var i = 0; i < name.length; i++ ) {
    if (!vowels.includes(name[i])){
      console.log(name[i])
      result += name[i]
    }
  }
  return result;
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {numLetter} letters</h2>
          <h2>I think React {thoughts}</h2>
          <h2>My name without any vowels is: {novowel(name)}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
