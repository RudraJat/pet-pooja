// Correct import for React 18
import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",
    {id:"heading"},
    "Namaste React 🥊")

const root =ReactDOM.createRoot
(document.getElementById("root"))

root.render(heading)
