// 304, 301, 302, 299, 
// 313 - 314, 


// ==========================================================================================================================
// 319 Keeper App part 3 
// Challenge part 1
//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

// App.jsx:
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [data, setData] = useState([]);
  //taken 'event' and 'input' from CreateArea
  function formSubmit(event, input) {
    console.log("clicked");
    event.preventDefault();
    console.log(data);
    setData((prev) => [...prev, input]);
  }

  return (
    <div>
      <Header />
      <CreateArea submit={formSubmit} />
      <Note key={1} title="Note title" content="Note content" />
      {/* Mapped the values here to Notes component */}
      {data.map((data, index) => {            
        console.log(data);
        return (
          <Note
            key={index}
            id={index}
            title={data.title}
            content={data.content}
          />
        );                                  
      })}                                
      <Footer />
    </div>
  );
}

export default App;

// CreateArea.jsx:
import React, { useState } from "react";

function CreateArea(props) {
  //React hook to handle input
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  //handling inputs
  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleInput}
          value={input.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleInput}
          value={input.content}
        />
        <button
          onClick={() => {    
            const retn = props.submit(event, input);        //passing the 'event' and 'input' values to App.jsx
            setInput({
              title: "",
              content: "",
            });
            return retn;
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;



// ==========================================================================================================================
//316-317 To-Do app Strike - through & delete items:

// App.jsx:
import React, { useState } from "react";
import ListItem from "./ListItem";
// import data, { count } from "./data";
function App() {
  const [item, changeVal] = useState("");
  const [data, changeData] = useState([]);
  // let count = 0;
  function getItemName(event) {
    const { name, value } = event.target;
    changeVal(value);
    // console.log(item);
  }
  function addItem(event) {
    let count = data.length + 1;
    console.log("click");
    changeData((prevItems) => [
      ...prevItems,
      {
        id: count,
        value: item,
      },
    ]);
    changeVal("");
    event.preventDefault();
  }

  //Delete items
  function deleteItem(index) {
    console.log("deleted");
    changeData((prev) => {
      const data = prev.filter((prev) => {
        return prev.id != index;
      });
      return data;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form" onSubmit={addItem}>
        <input
          name="itemName"
          type="text"
          onChange={getItemName}
          value={item}
        />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {data.map((data) => {
            return (
              <ListItem
                key={data.id}
                id={data.id}
                value={data.value}
                delete={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

// ListItem.jsx:
import React, { useState } from "react";
import App from "./App";
function ListItem(props) {
  const [custom, setStyle] = useState("");
  const [strike, setStrike] = useState(false);
  const customStyle = {
    textDecoration: custom,
  };
  function strikeThrough() {
    console.log("working");
    if (custom === "") {
      setStyle("line-through");
    } else {
      setStyle("");
    }
  }
  function isClicked() {
    setStrike(!strike);
  }
  return (
    <div
      onClick={() => {
        props.delete(props.id);
      }}
      style={{
        textDecoration: strike === true ? "line-through" : "none",
      }}
    >
      <li>{props.value}</li>
    </div>
  );
}

export default ListItem;





// ==========================================================================================================================
// 315 Spread Operator
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prev) => {
      return {
        ...prev,                    //------------------------------->
        [name]: value,              //------------------------------->
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;




// =============================================================================================================================
// 313-314 Changing complex state practice
// App.jsx:
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function getInput(event) {
    const { name, value } = event.target;
    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email,
        };
      } else if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email,
        };
      } else if (name === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={getInput}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={getInput}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={getInput}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;




// =============================================================================================================================
// 310- Event handling in React.
// App.jsx
import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("Hello");
  const [color, fn] = useState({ backgroundColor: "white" });

  function updateHeading() {
    setHeading("Submitted");
  }

  function mouseOver() {
    fn({ backgroundColor: "black", color: "white" });
  }
  function mouseOut() {
    fn({ backgroundColor: "white", color: "#50a3a2" });
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={color}
        onClick={updateHeading}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;



// =============================================================================================================================
// 309- ES6 Destructuring 
// Index.js
import animals from "./data";
import cars from "./practice";
// const []
let [cat, dog] = animals;
const { name, sound } = cat;
const { name: name2, sound: sound2 } = dog;
console.log(name, sound);
console.log(name2, sound2);
// CHALLENGE: uncomment the code below and see the car stats rendered
const [honda, tesla] = cars;
const [teslaTopColour] = tesla.coloursByPopularity;
const [hondaTopColour] = honda.coloursByPopularity;
// const { topSpeed: hondaTopSpeed } = honda.speedStats;
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const { topSpeed: teslaTopSpeed } = tesla.speedStats;
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// data.js:
let animals = [];
export default animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" },
];

//practice.js:
const cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5,
    },
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2,
    },
  },
];

export default cars;


// =============================================================================================================================
// 307 - useState Hook practice
// App.jsx
import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [val, fn] = useState(time);

  setInterval(getTime, 1000);     //-----------------

  function getTime() {
    fn(new Date().toLocaleTimeString()); //-------------
  }
  return (
    <div className="container">
      <h1>{val}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;


// =============================================================================================================================
// 306- React Hooks useState 
// App.jsx:
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;



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



// =============================================================================================================================
// 301 - Arrow function 

// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
let newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
newNumbers = numbers.filter((num) => num < 10);
console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumber);
////Find - find the first item that matches from an array.
newNumber = numbers.find((num) => num > 10);
console.log(newNumber);

////FindIndex - find the index of the first item that matches.
newNumber = numbers.findIndex((num) => num > 10);
console.log(newNumber);

// App.jsx

import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;

// ========================================================================================================================================
// 300 - Map , Filter , Reduce

import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

const ans = emojipedia.map((arr) => arr.meaning.slice(0, 100));

console.log(ans);

const filter = numbers.filter((arr) => arr > 10);
console.log(filter);

const reduce = numbers.reduce((sum, arr) => (sum += arr * 10));
console.log(reduce);

const find = numbers.find((arr) => arr > 10);
console.log(find);

const findIndex = numbers.findIndex((arr) => arr > 10);
console.log(findIndex);

// ====================================================================================================================================
// 299 - Mapping components practice
// App.jsx
import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function getEmoji(emoji) {
  return (
    <Card
      key={emoji.id}
      id={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(getEmoji)}
        {/* {emojipedia.map(getEmoji)} */}
        {/* {emojipedia.map(getEmoji)} */}
      </dl>
    </div>
  );
}

export default App;

// Card.jsx:
import React from "react";

function Card(props) {
  return (
    <div className="term">
      <span className="id">{props.id}</span>
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Card;




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
