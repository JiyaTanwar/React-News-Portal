import React from 'react';
import ReactDOM from 'react-dom';

const name = "Jiya Tanwar";
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
    <h1>My name is {name}</h1>
    <p>Current date is {currdate}</p>
    <p>Current time is {currtime}</p>
    </>,
    document.getElementById("root")
);