// let Submit = (e) => {
//   event.preventDefault();
//   let fnm = e.target[0].value;
//   let lnm = e.target[1].value;

//   let Printname = document.getElementById("Printname");
//   Printname.innerText = `my name is ${fnm} ${lnm} `;
// };


let Submit2 = (e) => {
  event.preventDefault();
let fnm = e.target[0].value;
let date =e.target[1].value

let dateobj = new Date();
let age = dateobj.getFullYear() - date.slice(0,4) ;

let Printname = document.getElementById("Printname");
  Printname.innerText = `my name is ${fnm}  age is ${age} `;

}