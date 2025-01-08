// ! Control Statements

// todo : if

// if (true) {
//   console.log("HEY");
// }

//? example 2

// if (10 === 10) {
//   console.log("it is stickly equal");
// }

// todo if - else

// if (10 === "10") {
//   console.log("it is stickly equal");
// } else {
//   console.log("it is  not stickly equal");
// }

//? example 2 ----

// let x = 100;

// if (x == 100) {
//   console.log("it is stickly equal");
// } else {
//   console.log("it is  not stickly equal");
// }

//? example 3 ----

// let n = 10;
// if (n % 2 == 0) {
//   console.log(`${n} even number`);
// } else {
//   console.log(`${n} odd number`);
// }

//TODO else-if ladder

// let num =0;
// if(num>0){
//     console.log(`${num} is positive number `);
// }
// else if(num<0){
//     console.log(`${num} is negative number `);
// }
// else
// {
//     console.log(`${num} is netural number `);
// }

//TODO NESTED IF LOOP

// let num = "key";
// if (typeof num === "number") {
//   if (num > 0) {
//     console.log(`${num} is positive number `);
//   } else if (num < 0) {
//     console.log(`${num} is negative number `);
//   } else {
//     console.log(`${num} is netural number `);
//   }
// } else {
//   console.log(`${num} is not a  number `);
// }

//? example 2 ----

let n = 95;
if (typeof (n) === "number") {
  if (n > 0) {
    if (n % 2 == 0) {
      document.writeln(`${n} it a number and positive number and even number`);
    }
    else {
      document.writeln(`${n} it a number and positive number and  odd number`);
    }
  }
  else if (n < 0) {
    if (n % 2 == 0) {
      document.writeln(`${n} it a number and negative number and even number`);
    }
    else {
      document.writeln(`${n} it a number and  negative number and  odd number`);
    }
  }
   else {
    if (n % 2 == 0) {
      document.writeln(`${n} it a number and netural number and even number`);
    }
    else {
      document.writeln(`${n} it a number and netural number and  odd number`);
    }
  }
}
else {
  document.writeln(`${n} is not a  number `);
}

//   TODO Switch

let signal = "black";

// switch (signal) {
//   case "red":
//     console.log("stop 🛑");
//     break;
//   case "yellow":
//     console.log("ready to go 🟡 ");
//     break;
//   case "green":
//     console.log(" go 🟢 ");
//     break;
//   default:
//     console.log("🟠 ");
// }


let i=0;
for(console.log("hello");i<5;console.log('world'))
{
    console.log("bye");
    i+=2;
}
