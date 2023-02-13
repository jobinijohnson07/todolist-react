import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./components/ToDoList/ToDoList";

ReactDOM.render(
    <React.StrictMode>
        <ToDoList />
    </React.StrictMode>,
    document.getElementById("root")
);
