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

const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3x3BazQ5A8Pl23HsWGaSdWX0iOGwNDqeGw&s" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const AppLayout = () =>{
    return <div className="app">
        <Header/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<Header/>);
