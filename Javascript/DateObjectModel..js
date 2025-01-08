// let DateObjectModel = () => {
//   let dateobj = new Date();
//   console.log(dateobj);

//   let curHrs = dateobj.getHours();
//   console.log(curHrs);

//   let curMin = dateobj.getMinutes();
//   console.log(curMin);

//   let curSec = dateobj.getSeconds();
//   console.log(curSec);

//   let curDate = dateobj.getDate();
//   console.log(curDate);

//   let curMon = dateobj.getMonth();
//   console.log(curMon + 1);

//   let curYear = dateobj.getFullYear();
//   console.log(curYear);

//   let CurTime = dateobj.getDate();
//   console.log(CurTime);
// };

// DateObjectModel();

//!-----------------------

let ageCalculate = (dob) => {
  let dateobj = new Date();
  let age = dateobj.getFullYear() - dob;
  console.log(`my age is ${age}`);
};
ageCalculate(2002);

//!-----------------------

// let arr = [100,200,300,[10, 20, 30],250,150,[15, 25, 35],["a", "b", "c"]];
// console.log(arr);
// let res = arr.flat();
// console.log(res);
//!-----------------------
//? Spread Operator -------------

// let x = [10, 20, 30];
// let y = [15, 25, 35];
// let z = [x, y];

// console.log(z);

// let a1 = [...x, y];
// console.log(a1);
//!-----------------------
//? Rest Operator 

// function num(...a){
//     console.log(a);
//     console.log(...a);
// }

// num(100,200,300,400);


//!-----------------------

let  num = (...arr )=>{
    // console.log(arr);
    let res = arr.map((elem)=>{
        return (elem*elem)
    })
    // console.log(res)


    let res1 = res.sort((a,b) => a - b); 
    console.log(res1);

    let res2 = res1.filter((res1) => res1 % 2 === 0);
    console.log(res2);

    let res3 = res2.reduce((acc, elem) => acc + elem, 0);
    console.log(res3);
}
num(8,9,3,4,5,6,7,10,2,1)