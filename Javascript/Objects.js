// let obj={}
// console.log(obj);
// console.log(typeof obj);
// ! making a object with keyname and value

// let car = {
//   carname: "omni",
//   carColor: "white",
//   milage: 20,
// };
// console.log(car);
// console.log(car["carname"]); //! Subscript operator
// console.log(car.milage); //! dot  operator

//! Modification
// todo Update THE PROPERTY TO THE OBJECT

//? objectname.propertyName = new value

// car.carColor = "black";
// console.log(car);

//TODO  ADD THE PROPERTY TO THE OBJECT
//? objectname.newpropertyName = new value

// car.regno = "KA 01 1234";
// console.log(car);

// todo Delete the properties from the object
//? delete(keyword) objectname.propertyName

// delete car.milage;
// console.log(car);

//!---------------------------------

// let person = {
//   fnm: "shashi",
//   lnm: "singh",
//   dob: 2000,
//   calculateAge: function () {
//! this keyword is used to refer the current objects
//     let age = 2024 - this.dob;
//     console.log(`${this.fnm} age is ${age}`);
//   },
// };

// console.log(person);
// person.calculateAge();

//!-------------------------------

// document.writeln()
// document.writeln('hai')

//!-------------------------------

// let doc ={
//     wrtln:function(txt){
//         console.log(txt);
//     }
// }

// doc.wrtln("hello")

//!-------------------------------

// let doc ={
//         wrtln:function(txt=String()){
//             console.log(txt);
//         }
//     }
// doc.wrtln("hello")

//!------------------------------

// let o = new Object();
// console.log(o);

// let car = new Object();
// console.log(car);

// car.carName = "thar";
// car.carColor = "black";
// console.log(car);

//!-------------------------------

//? Constructor function

// function Person(){
//     this.fnm ="shashi",
//     this.lnm = "singh"
// }
// let p1 = new Person()

// console.log(typeof Person);
// console.log(typeof p1);
// console.log(p1);

// function Person(fnm='', lnm='') {
//   this.fname = fnm;
//   this.lname = lnm;
// }
// let p1 = new Person("shashi", "singh");

// console.log(p1);
// console.log(p1.fname);
// console.log(p1.lname);

// let p2 = new Person("shashikant", "singh");
// console.log(p2);
// console.log(p2.fname);
// console.log(p2.lname);

// let p3 = new Person();
// console.log(p3);

//? create 3 student object  with four propertites using constructor function

function Student(fnm, lnm, rollno, age) {
  this.name = fnm;
  this.lname = lnm;
  this.id = rollno;
  this.age = age;
}

let s1 = new Student("siddrath ", "gupta", 23, 20);
console.log(s1);
console.log(s1.name);
console.log(s1.lname);
console.log(s1.id);
console.log(s1.age);

let s2 = new Student("shashi", "singh", 20, 21);
console.log(s2);
console.log(s2.name);
console.log(s2.lname);
console.log(s2.id);
console.log(s2.age);

let s3 = new Student("Raina ", "roy", 22, 22);
console.log(s3);
console.log(s3.name);
console.log(s3.lname);
console.log(s3.id);
console.log(s3.age);


