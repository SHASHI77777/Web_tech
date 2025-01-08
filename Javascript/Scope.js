// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a, b, c);

//! Statement Block

// if (true) {
//   //? global scope

//   var a = 100;

//   //? local  scope
//   let b = 200;
//   const c = 300;

//   console.log(a, b, c);
// }

//! console.log(c);  not defined

//! Function block

// function fun() {
//   var x = 100;
//   let y = 200;
//   const z = 300;

//   console.log(x, y, z);

//   return x;
// }

// let x = fun();
// console.log(x);

//! Destructing

//todo :Array Destructing

// let arr=["bangalore","kolkata","delhi","noida"]

// let [ban,kol,del,no]=arr

// console.log(`my fav place is ${kol}`);

//todo :Object  Destructing

// let person = {
//   fname: "dinga",
//   lname: "raja",
//   age: 24,
//   place: "bangalore",
// };

// console.log(person);
// console.log(`${person.fname} age is ${person.age}`);

// let { fname, age } = person;
// console.log(`${fname} age is ${age}`);

//todo : Hosting

//todo :  variable Hosting
// var a ;
// a=100
// console.log(a);

// b=200
// let b ;
// console.log(b);

//todo : Function Hosting

// fun()
// function fun (){
//     console.log('hello');
// }

//? not possible  in es6
// demo()
// var demo = function(){
//     console.log('bye' );
// }

//? for in and for of

//? array
//? get index value
// let arr = [10, 20, 30, 40, 50];

// for (let key in arr) {
//   console.log(key);
// }
//? get value
// for (let key of arr) {
//   console.log(key);
// }

//? object --- for of  is not possible


let person = {
  fname: "dinga",
  lname: "raja",
  age: 24,
  place: "bangalore",
};
//? get index value
for (let key in person) {
  console.log(key);
}
//? get value
for (let key in person) {
  console.log(person[key]);
}
