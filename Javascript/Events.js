//!------ click Events -------------
let call=()=>{
    console.log('hello from javascript');
}

let SingleClick=()=>{
    console.log("Single click ");
}

let DoubleClick=()=>{
    console.log("Mingle click ");
}

//!------ Keyboard Events -------------

let fun1=()=>{
    console.log("on press ");
}

let fun2=()=>{
    console.log("on down ");
}
let fun3=()=>{
    console.log("on up ");
}

//!------Mouse  Events----------


let smile=()=>{
    console.log('smile')
}

//!-----------  form submit event --------

let handleSubmit=(e)=>{
    e.preventDefault();

    let fnm = e.target[0].value
    let lnm = e.target[1].value
    let date =e.target[2].value
   
  let dateobj = new Date();
  let age = dateobj.getFullYear() - date.slice(0,4) ;
    
    console.log(`my name is ${fnm} ${lnm}  & age is  ${age}`);
}

//!-----------  Using popup's (Prompt,alert,confirm) --------

let PrintName =()=>{
let user = prompt("Enter name ");


if(user==="" || user===null){

    let bool = confirm(`Do you want to exit....! `);
    bool?alert('Thank you !... '): PrintName();
}
else{
    alert(`My name is ${user}`)
}
}



