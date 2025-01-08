//! Function

//todo general Function

//! Function without parameter and without return value
// function fun(){
//     console.log('hello'); // hello
// }
// fun ()

//! Function with parameter and without return value

// function Name(fnm,lnm){
//     console.log(`my name is ${fnm} ${lnm}`); // my name is SHASHI SINGH
// }
// Name ('SHASHI','SINGH');

// function demo(abc){
//     console.log(abc); // 10
// }
// demo(100);
// demo('hey')
// demo(true)
// demo()

//! wap TO PRINT EVEN NUMBER FROM 20 TO 40 USING GENRAL FUNCATION WITH PARAMETER

//   function even(a,b){
//     for(let i=a;i<=b;i++){
//         if(i%2==0)
//         console.log(i);
//     }
//   }
//   even(20,40);
//   console.log("-------");
//   even(58,64);
//   console.log("-------");
//   even(100,120);
//!------------------------
//! wap TO PRINT EVEN NUMBER or odd number  FROM 20 TO 40 USING GENRAL FUNCATION WITH PARAMETER

//!------------------------
// function num(i) {
//   if (typeof i === "number"){
//     if (i % 2 == 0) {
//       console.log(`is a even number ${i}`);
//     } else {
//       console.log(`is a odd  number ${i}`);
//     }
// }
// else
// console.warn(`it is not a number ${i}`)
// }
// num('hey');
// num(44);
// num(91);
//!------------------------
// ? take name from  user and print it

// function username (){
//     let user =prompt('Enter username ')
//     console.log('hello  ' +user)
// }
// username ();
//!------------------------

//? wap to add 2 number by using genral funcation
//!------------------------
// function add(){
//     let a=Number(prompt('Enter a number '));
//     let b=Number(prompt('Enter a number '));
//     let sum = a+b;
//     console.log(`${a} + ${b} = ${sum}`);
// }
// add()
//!------------------------
//? wap to arthematic  2 number by using genral funcation
// function add(){
//     let a=Number(prompt('Enter a number '));
//     let b=Number(prompt('Enter a number '));

//     let sum = a+b;
//     let sub=a-b;;
//     let mul=a*b;;
//     let div=a%b;;
//     let rem=a/b;;
//     console.log(`${a} + ${b} = ${sum}`);
//     console.log(`${a} - ${b} = ${sub}`);
//     console.log(`${a} * ${b} = ${mul}`);
//     console.log(`${a} % ${b} = ${div}`);
//     console.log(`${a} / ${b} = ${rem}`);
// }
// add()

//! how to change default (undefined value) of a function

// function  fun(txt=100){
//     console.log(txt);
// }
// fun();
// fun("hai");
//!------------------------
// function fun (a,b,c=420){
//     var b ='is'
//     console.log(a,b,c);
// }
// fun("dinga")
//!------------------------
// function num(){
// let a=20
// let b =40

// let sum = a+b
// return(sum);
// }

// let sum =num()
// console.log(sum);
//!------------------------

// function demo(){
//     let txt = 1000
//     return txt;
// }
// let x = demo ()
// console.log(x)

//!------------------------

//! Function without parameter and with return value

// function getValue() {
//     return 42;  // This value can be anything you want
//   }

//   console.log(getValue());  // Output: 42

//! Function with parameter and with return value

// function fullname(txt) {
//     return ('hello '+ txt);
//   }

// let msg = fullname('dinga');
// console.log(msg);

//todo -  wap a check or odd number by using genral funcation with parameters and return value

// function odd_even(num){
//    return (num%2==0)?`${num}is even `:`${num} is odd`
// }
// let res=odd_even(9);
// console.log(res);

// function odd_even(num){
//     if (num % 2 == 0)
//         return "even";
//     else
//         return "odd";
// }

// let res1 = odd_even(9);
// console.log(res1);

//!-------------------- without parameter and return value
// let num = function(){
//     console.log('hello');
// }
// num();

//!-------------------- with parameter and without return value
// let num = function(a){
//        console.log(a);
//     }
// num(1);
//!-------------------- without  parameter and with return value
// let num = function(){
//    return 90
//  }
// let res=num();
// console.log(res);

//
//!--------------------with  parameter and return value
// let num = function(num){
//     return num
//   }
//  let res=num(90);
//  console.log(res);

//todo arrow function
// !----- Without  parameters and without return values
//  let arrow = ()=>{

//     console.log('hello');
//  }
//  arrow();

// !-----  With parameters and without return values

// let  arrow1 = (name) => {
//     console.log("Hello " + name );
// };

// arrow1("Shashi");

// !----- Without parameters and with return values
// let arrow2 = () => {
//     return "Hello";
// };

// let result =arrow2()  ;
// console.log(result);

// !----- With parameters and with return values

// let arrow3 = (name) => {
//     return "Hello, " + name + "!";
// };

// let res =  arrow3("Shashi");
// console.log(res);

//!============== special benhaviour of arrow function
//? no need to write () for one parameter
// let fun = user=>{
//     console.log('hello'+user);
// }
// fun("dinga")

//? no need to write return and {}
// let fun = user=>('hello '+user);
// let res =fun("dinga")
// console.log(res);

//? no parameter and can be write as _ or ()

// let fun = _ =>{
//   console.log  ('hello');
// }
// fun ();

//?   if we want write one statement {} is optional

// let fun =_=> console.log('hello')
// fun();

//?-------------

// let num =(a,b)=> `${a}+${b} = ${a+b}`
// console.log(num(10,20));

//!---------
// let num =a=>a%2==0?'even':'odd'
// console.log(num(10));
// console.log(num(39));

//todo : SIF/IIF

// (() => {
//   console.log("i m in sif ");
// })();

//???????????????
// (() => {
//   console.log("hey");
// })();

//!!!--------------------------

// let add =(a,b)=>`${a}+${b}=${a+b}`
// let res = add(10,20)
// console.log(res);

// console.log(((a,b)=>`${a}+${b}=${a+b}`)(10,20))
// console.log((num=>  num%2==0?'even':'odd')(29))

// todo call back function

//! num function will be called inside the sum function it is known as call back function

// let num = _ => 100;
// let sum = (a, b) => {
//   let add = a + b;
//   console.log(add);
// };
// sum(num(), 200);

// let num = _ => 100
// let sum = (a, b) => {
//   let add = a()+ b
//   console.log(add)
// }
// sum(num, 200)

//! using one functions  result into another function

// let surname = _ => "Singh";

// let fullname = (fnm, lnm) => {
//   console.log(`My name is ${fnm} ${lnm}`);
// };

// fullname("Shashi", surname());


//todo - Higher order function 

let sum = (a, b) => {
  let add = a()+ b
  console.log(`${a()} + ${b} = ${add}`)
}
sum( _ => 100, 200)

