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
const jsxHeading = (
    <h1 className="head">
        Namaste React using JSX🥊
    </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
