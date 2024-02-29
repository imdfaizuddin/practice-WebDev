



// ===============================================================================================================================
// https://codesandbox.io/p/sandbox/react-styling-practice-forked-lfdsmq?file=%2Fsrc%2Findex.js%3A1%2C1-37%2C1
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "",
};
const greetings = ["Good morning", "Good Afternoon", "Good evening"];
let greet = getGreeting();
// console.log(new Date().getHours());
function getGreeting() {
  let hour = new Date().getHours();
  if (hour < 12) {
    customStyle.color = "red";
    return greetings[0];
  } else if (hour >= 12 && hour < 18) {
    customStyle.color = "green";
    return greetings[1];
  } else if (hour >= 18 && hour <= 23) {
    customStyle.color = "blue";
    return greetings[2];
  }
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greet}
  </h1>,
  document.querySelector("#root")
);




// ===========================================================================================================================
// https://codesandbox.io/p/sandbox/inline-styling-in-jsx-forked-w843c7?file=%2Fsrc%2Findex.js%3A1%2C1-16%2C1
// Inline Styling 


import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "5rem",
  border: "5px solid turquoise",
};

customStyle.backgroundColor = "black";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);





// ===============================================================================================================================================
// Adding images React


import React from "react";
import ReactDOM from "react-dom";

const link = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>
        <img
          src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sunflower"
        />
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sunrise"
        />
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1627283391728-701007067e7e?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=" flowers"
        />
      </li>
      <li>
        <img src={link} alt="random" />
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);



// ==============================================================================================================
// https://codesandbox.io/p/sandbox/javascript-expressions-in-jsx-practice-forked-k2yftd?file=%2Fsrc%2Findex.js
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const name = "Faiz";
const year = new Date().toString().split(" ").slice(3, 4).join("-");

const years = new Date().getFullYear();
const year1 = new Date().toString().split(" ")[3];
ReactDOM.render(
  <div>
    <h1>Created by {name}</h1>
    <h6>&copy; {year}</h6>
    <h6>{years}</h6>
    <h6>{year1}</h6>
  </div>,
  document.getElementById("root")
);


// ====================================================================================================================================

import React from "react";
import ReactDOM from "react-dom";

const fname = "Md";
const lname = "Faizan";
const random = Math.floor(Math.random() * 10 + 1);
ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`} </h1>
    <p>Your lucky no is {random}</p>
  </div>,
  document.getElementById("root")
);


// ==================================================================================================================================
// https://codesandbox.io/p/sandbox/javascript-expressions-in-jsx-forked-9f279y?file=%2Fsrc%2Findex.js%3A4%2C20
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1> Frontend: </h1>
    <ul>
      <li> HTML </li>
      <li> CSS </li>
      <li> JavaScript </li>
    </ul>
  </div>,
  document.getElementById("root")
);
