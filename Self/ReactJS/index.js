// 304, 301, 302, 299, 



// =============================================================================================================================
// 304 -Conditional Rendering Practice 
// App.js: 
import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

// Form.jsx:

import React from "react";
import Input from "./Input";
function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {/* IMPORTANT: */}
      {props.userIsRegistered === false && ( <Input type="password" placeholder="Confirm Password" />  )}
      {/* TERNERY OPERATOR: */}
      {props.userIsRegistered ? (
        <button type="submit">Login</button>
      ) : (
        <button type="submit">Register</button>
      )}
    </form>
  );
}

export default Form;

// Input.jsx:
import React from "react";

export default (props) => (
  <input type={props.type} placeholder={props.placeholder} />
);





// ====================================================================================================================================
// 294
// Keeper App homepage
// Index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

// App.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Note} from "./Note";

function App(){
    return(
        <div>
        <Header />
        <Note />
        <Footer />
        </div>
    );
};

export default App;

// Header.jsx
import React from "react";

function Header(){
    return (<header>
        
        <h1>Keeper</h1>
        
    </header>);
};

export default Header;

//Footer.jsx
import React from "react";



function Footer() {
    const year = new Date().getFullYear();
    console.log(year);
    return (
        <footer>
            <p>&copy; {year}</p>
        </footer>
    )
}


export default Footer;

//Note.jsx
import React from "react";

function Note(){
    return(
        <div className="note">
            <h1>This is note title</h1>
            <p>This is note content</p>
        </div>
    )
}

export default Note;
export {Note};



// ====================================================================================================================================
// IMPORT/ EXPORT PRACTICE
// Index.Js
import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subtract, divide } from "./calculator";
//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

//calculator.Js
function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

export { add, multiply, subtract, divide };



// =================================================================================================================================
// REACT COMPONENTS 
// index.js:
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


//App.jsx:
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
function App() {
  return <Heading />;
}

export default App;


//Heading.jsx:
import React from "react";

let greeting;

const date = new Date(0, 0, 0, 10);

const currentTime = date.getHours();
const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;




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
