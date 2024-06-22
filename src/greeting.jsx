import React from 'react';
import ReactDOM from 'react-dom';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {
    paddingLleft: '100px',
    paddingRight: '100px',
    paddingTop : '100px',
    paddingBottom: '100px',
    marginTop:'250px',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'palevioletred'
};

if(curDate>=1 && curDate<12){
    greeting = "GOOD MORNING";
    cssStyle.color = "green";
}else if(curDate>12 && curDate<19){
    greeting = "GOOD AFTERNOON";
    cssStyle.color = "orange";
}else{
    greeting="GOOD NIGHT";
    cssStyle.color = "black";
    
}

ReactDOM.render(
    <>
<h1>Hello Mam, <span style = {cssStyle}>{greeting}</span></h1>
    </>,
    document.getElementById("root")
);