// Correct import for React 18
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object =>HTMLElement(Render)

// const heading=React.createElement("h1",
//     {id:"heading"},
//     "Namaste React 🥊");

// console.log(heading);

//Easy Way
//JSX - HTML-like or XML-like syntax

const elem = <span>React Element</span>
const Title =()=> (
    <h1 className="head">
        {elem} 
        Namaste React using JSX🥊
    </h1>
);



const HeadingComponent =()=>(
    <div id="container">
        <Title />
        <Title></Title>
        {Title()} {/* because and all it is js code(function) */}
        <h1 className="heading">Namaste React Funcitonal Component.</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<HeadingComponent/>);
