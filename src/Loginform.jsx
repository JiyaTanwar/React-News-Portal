// import React, { useState } from 'react';

// const App =() =>{
//     const[name,setName] = useState();
//     const [fullName,setfullName] = useState();
//     const [lastName,setLastName] = useState();
//     const[lastNewName,setLastNewName] = useState();
//     const inputEvent =(event) =>{
//         // console.log("clicked");
//         console.log(event.target.value);
//         setName(event.target.value);
//     };
//     const onSubmits=(event)=>{
//         event.preventDefault();
// setfullName(name);
// setLastNewName(lastName);
//     };
//     const inputEventTwo =(event) =>{
// setLastName(event.target.value);
//     };
// return (
// <>
// <div>
//     <form onSubmit={onSubmits}>
//     <h1>Hello {fullName}{lastNewName}</h1>
//     <div className='input'>
//     <input type='text' placeholder='Enter your Name' onChange={inputEvent}value={name} ></input>
//     </div>
//     <br></br>
//     <div className='input'>
//     <input type='text' placeholder='Enter your Last Name' onChange={inputEventTwo}value={lastName} ></input>
//     </div>
//     < button type='submit' >Click Me 👍</button>
//     </form>
// </div>
// </>
// );
// }
// export default App;

/* Css styling for hooks login form of count. */

// *{
//     background-color: lightpink;
//     justify-content: center;
//     border: 3px;
//     border-color: black;
//     padding: 20px;

// }
// h1{
//     text-align: center;
//     padding: 35px;
//     margin-left: 40%;
//     margin-right: 40%;
//     color: maroon;
//     background-color: beige;
//     justify-content: center;
//     font-size: larger;
//     font-family: Georgia, 'Times New Roman', Times, serif;
//     font-weight: bold;
// }
// button{
//     color: white;
//     background-color: maroon;
//     padding: auto;
//     margin-left: 45%;
//     margin-right: 45%;
//     justify-self: center;
//     text-align: center;
//     border: 5px;
//     cursor: pointer;
//     border-color: black;
//     font-family: Georgia, 'Times New Roman', Times, serif;
//     font-weight: bold;
//     font-size: larger;
// }
// .input{
//     border: 3px;
//     border-color: black;
//     border-radius: 3px;
//     font-family: Georgia, 'Times New Roman', Times, serif;
//     font-weight: bold;
//     font-size: larger;
//     background-color: white;
//     color: darkblue;
//     padding: auto;
//     margin-left: 25%;
//     margin-right: 25%;
//     justify-self: center;
//     text-align: center;
// }

// Simplifying the existing form 

// import React, { useState } from 'react';

// const App =() =>{
//     const[fullName,setFullName] = useState({
//         fName : "",
//         lName : "",
//     });
    
//     const inputEvent =(event) =>{
//         // console.log("clicked");
//         console.log(event.target.value);
//        console.log(event.target.name); 

//        const value = event.target.value;
//        const name = event.target.name;

//        setFullName((preValue) =>{
//         if(name==="fName"){
//             return{
//                 fName : value,
//                 lName : preValue.lName,
//             };
//         }else if(name==="lName"){
//             return{
//                 fName : preValue.fName,
//                 lName : value,
//             };
//         }
//        })
//     };
//     const onSubmits=(event)=>{
//         event.preventDefault();
//         alert('form submitted');
//     };
   
// return (
// <>
// <div>
//     <form onSubmit={onSubmits}>
//     <h1>Hello {fullName.fName} {fullName.lName}</h1>
//     <div className='input'>
//     <input type='text' placeholder='Enter your Name' name='fName' onChange={inputEvent}
//     value={fullName.fName}
//      ></input>
//     </div>
//     <br></br>
//     <div className='input'>
//     <input type='text' placeholder='Enter your Last Name' name='lName' onChange={inputEvent} 
//     value={fullName.lName}
//      ></input>
//     </div>
//     < button type='submit' >Click Me 👍</button>
//     </form>
// </div>
// </>
// );
// }
// export default App;


// Adding more sections in the existing form

// import React, { useState } from 'react';

// const App =() =>{
//     const[fullName,setFullName] = useState({
//         fName : "",
//         lName : "",
//         email : "",
//         phone : ""
//     });
    
//     const inputEvent =(event) =>{
//         // console.log("clicked");
//         console.log(event.target.value);
//        console.log(event.target.name); 

//        const {value,name} = event.target;

//        setFullName((preValue) =>{
//         if(name==="fName"){
//             return{
//                 fName : value,
//                 lName : preValue.lName,
//                 email : preValue.email,
//                 phone : preValue.phone
//             };
//         }else if(name==="lName"){
//             return{
//                 fName : preValue.fName,
//                 lName : value,
//                 email : preValue.email,
//                 phone : preValue.phone
//             };
//         }else if(name==="email"){
//             return{
//                 fName : preValue.fName,
//                 lName : preValue.lName,
//                 email : value,
//                 phone : preValue.phone
//             };
//         }else if(name==="phone"){
//             return{
//                 fName : preValue.fName,
//                 lName : preValue.lName,
//                 email : preValue.email,
//                 phone : value
//             };
//         }
//        })
//     };
//     const onSubmits=(event)=>{
//         event.preventDefault();
//         alert('form submitted');
//     };
   
// return (
// <>
// <div>
//     <form onSubmit={onSubmits}>
//     <h1>Hello {fullName.fName} {fullName.lName}</h1>
//     <p>{fullName.email}</p>
//     <p>{fullName.phone}
//     </p>
//     <div className='input'>
//     <input type='text' placeholder='Enter your Name' name='fName' onChange={inputEvent}
//     value={fullName.fName}
//      ></input>
//     </div>
//     <br></br>
//     <div className='input'>
//     <input type='text' placeholder='Enter your Last Name' name='lName' onChange={inputEvent} 
//     value={fullName.lName}
//      ></input></div>
//      <br></br>
//      <div className='input'>
//     <input type='text' placeholder='Enter your Email' name='email' onChange={inputEvent} 
//     value={fullName.email}
//      ></input></div>
// <br></br>
// <div className='input'>
//     <input type='text' placeholder='Enter your Mobile number' name='phone' onChange={inputEvent} 
//     value={fullName.phone}
//      ></input>
//     </div>
//     < button type='submit' >Submit here 👍</button>
//     </form>
// </div>
// </>
// );

// }
// export default App;

// Again simplifying form and adding extra field

import React, { useState } from 'react';

const App =() =>{
    const[fullName,setFullName] = useState({
        fName : "",
        lName : "",
        email : "",
        phone : "",
        qua : ""
    });
    
    const inputEvent =(event) =>{
        // console.log("clicked");
        console.log(event.target.value);
       console.log(event.target.name); 

       const {name,value} = event.target;

       setFullName((preValue) =>{
        console.log(preValue);
        return{
            ...preValue,
            [name]: value
        }
        // if(name==="fName"){
        //     return{
        //         fName : value,
        //         lName : preValue.lName,
        //         email : preValue.email,
        //         phone : preValue.phone
        //     };
        // }else if(name==="lName"){
        //     return{
        //         fName : preValue.fName,
        //         lName : value,
        //         email : preValue.email,
        //         phone : preValue.phone
        //     };
        // }else if(name==="email"){
        //     return{
        //         fName : preValue.fName,
        //         lName : preValue.lName,
        //         email : value,
        //         phone : preValue.phone
        //     };
        // }else if(name==="phone"){
        //     return{
        //         fName : preValue.fName,
        //         lName : preValue.lName,
        //         email : preValue.email,
        //         phone : value
        //     };
        // }
       })
    };
    const onSubmits=(event)=>{
        event.preventDefault();
        alert('form submitted');
    };
   
return (
<>
<div>
    <form onSubmit={onSubmits}>
    <h1>Hello {fullName.fName} {fullName.lName}</h1>
    <p>{fullName.email}</p>
    <p>{fullName.phone}
    </p>
    <p>{fullName.qua}</p>
    <div className='input'>
    <input type='text' placeholder='Enter your Name' name='fName' onChange={inputEvent}
    value={fullName.fName}
     ></input>
    </div>
    <br></br>
    <div className='input'>
    <input type='text' placeholder='Enter your Last Name' name='lName' onChange={inputEvent} 
    value={fullName.lName}
     ></input></div>
     <br></br>
     <div className='input'>
    <input type='text' placeholder='Enter your Email' name='email' onChange={inputEvent} 
    value={fullName.email}
     ></input></div>
<br></br>
<div className='input'>
    <input type='text' placeholder='Enter your Mobile number' name='phone' onChange={inputEvent} 
    value={fullName.phone}
     ></input>
    </div>
    <br></br>
    <div className='input'>
    <input type='text' placeholder='Enter your Qualification' name='qua' onChange={inputEvent} 
    value={fullName.qua}
     ></input>
    </div>
    < button type='submit' >Submit here 👍</button>
    </form>
</div>
</>
);

}
export default App;

import React, { useState } from 'react';

const App =() =>{
    const[fullName,setFullName] = useState({
        fName : "",
        lName : "",
        email : "",
        phone : "",
        qua : ""
    });
    
    const inputEvent =(event) =>{
        // console.log("clicked");
        console.log(event.target.value);
       console.log(event.target.name); 

       const {name,value} = event.target;

       setFullName((preValue) =>{
        console.log(preValue);
        return{
            ...preValue,
            [name]: value
        }
        // if(name==="fName"){
        //     return{
        //         fName : value,
        //         lName : preValue.lName,
        //         email : preValue.email,
        //         phone : preValue.phone
        //     };
        // }else if(name==="lName"){
        //     return{
        //         fName : preValue.fName,
        //         lName : value,
        //         email : preValue.email,
        //         phone : preValue.phone
        //     };
        // }else if(name==="email"){
        //     return{
        //         fName : preValue.fName,
        //         lName : preValue.lName,
        //         email : value,
        //         phone : preValue.phone
        //     };
        // }else if(name==="phone"){
        //     return{
        //         fName : preValue.fName,
        //         lName : preValue.lName,
        //         email : preValue.email,
        //         phone : value
        //     };
        // }
       })
    };
    const onSubmits=(event)=>{
        event.preventDefault();
        alert('form submitted');
    };
   
return (
<>
<div>
    <form onSubmit={onSubmits}>
    <h1>Hello {fullName.fName} {fullName.lName}</h1>
    <p>{fullName.email}</p>
    <p>{fullName.phone}
    </p>
    <p>{fullName.qua}</p>
    <div className='input'>
    <input type='text' placeholder='Enter your Name' name='fName' onChange={inputEvent}
    value={fullName.fName}
     ></input>
    </div>
    <br></br>
    <div className='input'>
    <input type='text' placeholder='Enter your Last Name' name='lName' onChange={inputEvent} 
    value={fullName.lName}
     ></input></div>
     <br></br>
     <div className='input'>
    <input type='text' placeholder='Enter your Email' name='email' onChange={inputEvent} 
    value={fullName.email}
     ></input></div>
<br></br>
<div className='input'>
    <input type='text' placeholder='Enter your Mobile number' name='phone' onChange={inputEvent} 
    value={fullName.phone}
     ></input>
    </div>
    <br></br>
    <div className='input'>
    <input type='text' placeholder='Enter your Qualification' name='qua' onChange={inputEvent} 
    value={fullName.qua}
     ></input>
    </div>
    < button type='submit' >Submit here 👍</button>
    </form>
</div>
</>
);

}
export default App;