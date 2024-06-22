// Creating Gallery like using external, internal and inline CSS in the JSX file
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./index.html";

const name = "Jiya Tanwar";
const img1 = "";
const img2 = "";
const img3 = "";

ReactDOM.render(
<React.Fragment>
<h1 className='heading'>My name is {name}</h1>
<img src= {img1} alt='randomImages'></img>
<img src={img2} alt = 'randomImages'></img>
<a>
<img src={img3} alt='randomImages'></img>
</a>
</React.Fragment>,
document.getElementById("root")

);