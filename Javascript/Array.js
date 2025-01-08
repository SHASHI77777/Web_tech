// let x = (...a) => {
//    console.log(a);
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//       console.log(a[i]);
//     }
//   }
// };
// x(20, 40, 340, 223, 1001);
//! --------------------------------
//! The concat() method is used to merge two or more arrays.
//!It does not change the existing arrays but
//!returns a new array that combines the elements of the original arrays.
//! --------------------------------
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = arr1.concat(arr2);
// console.log(result); // [1, 2, 3, 4, 5, 6]
//! --------------------------------
// let arr = [10, 20, 30,50,40]
// console.log(arr)
// console.log(typeof arr)
// console.log(arr.length)
// console.log(arr[4])

//? example program

//todo print only even number

// let arr = [10, 340, 20, 90, 690, 77, 99];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }
//! --------------------------------
//todo print only  number

// let arr =[10,20,'hai',true,200,'bye']
// for(let i=0;i<arr.length;i++){
//       if (typeof(arr[i]) === 'number'){
//           console.log(`arr[${i}] is equal to ${arr[i]}`);
// }
// }
//! --------------------------------number and is even or not 
// let arr =[10,20,'hai',true,'200','bye',false,'30']
// for(let i=0;i<arr.length;i++){
//     if (typeof(arr[i])==='number')
//         if (arr[i] % 2 == 0) {
//            console.log(arr[i]);
//         }
// }
//! --------------------------------
//! modification 
// let arr=[10,20,30,60]
// console.log(arr);
//! --------------------------------
// todo update the array elements 

// arr[2]='updated'
// console.log(arr);
//! --------------------------------
//todo add the array element 

// arr[5]='added'
// console.log(arr);
//! --------------------------------
//todo: Delete the array elements 
// delete arr[3]
// console.log(arr);
//! --------------------------------
//? Methods 
// let arr=[10,20,30,60]
// //! Push() 
// arr.push('hey',50)
// console.log(arr);
// 
//! --------------------------------
//! pop()
// let deleted_element=arr.pop()
// console.log(arr);
// console.log(deleted_element);
//! --------------------------------
//!unshift
// arr.unshift(100)
// console.log(arr);

//! --------------------------------
//! Shift 
// let deleted_element_for_start=arr.shift()
// console.log(arr);
// console.log(deleted_element_for_start);
//!--------------- 
//! Splice()
//? deleting the array elements from the array list  
// let x = arr.splice(0,1)
// console.log(arr);
// console.log(x);
// //!-----------------
//? Adding the array elements from the array list  
// arr.splice(2,0,'new1',true)
// console.log(arr);
//!-----------------
//? both operation  in line or updating old  to new 
// let z=arr.splice(2,1,true)
// console.log(arr);
// console.log(z);
//!----------------- using for loop ------------------

// let arr = [10,20,30,40,50]
// console.log(arr);
// console.warn('using for loop' );
// let res=[]
// for(let i =0;i<arr.length;i++)
// {
//     res.push(arr[i]+5)
// }
// console.log(res);

//! -----Map ()---------------
// console.warn('using map' );
// let add = arr.map((elem)=>{
//     return (elem+5)
// })
// console.log(add)


//!----------------

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr);
// console.warn('using for loop' );
// let res=[]
// for(let i =0;i<arr.length;i++)
// {
//     res.push(arr[i]*arr[i])
// }
// console.log(res);

//?-------------

// console.log('-------------------');

// console.log(arr);
// console.warn('using map' );
// let add = arr.map((elem)=>{
//     return (elem * elem)
// })
// console.log(add)

//!-----------------------
// let arr = [2, 3, 4, 5, 6];
// console.log(arr);
// let add = arr.reduce((preVal, curVal) => {
//   console.log('preVal = ${preVal}');
//   console.log('curVal = ${curVal}');

//   return preVal + curVal;
// });
// console.log(add);
//!sort()

// let arr = [8,6,9,7,3,4,5,2,1]
// console.log(arr)
// let res = arr.sort()
// console.log(res)
// let res1 = arr.sort().reverse()
// console.log(res1)


//todo: -- (a-b) means ascending order
// let arr = [94,96,562,6,5,94,626,56,4]
// console.log(arr)
// let res = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(res)


//todo: --(b-a) means descending order---

// let arr = [94,96,562,6,5,94,626,56,4]
// // console.log(arr)
// let res = arr.sort((a,b)=>{
//     return b-a
// })
// console.log(res)

//!---------------------------

let arr = [10, 'Hai', true, 100, false, 'Bye', true];
console.log(arr);

let i1 = arr.indexOf(true);
console.log(i1);

let i2 = arr.lastIndexOf(true);
console.log(i2);

let i3 = arr.indexOf('hello');
console.log(i3);

let i4 = arr.includes('Hai');
console.log(i4);

let arr1 = ['welcome', 'to', 'web', 'class'];
console.log(arr1);

let r1 = arr1.reverse();
console.log(r1);

let j1 = arr1.join(' ');
console.log(j1);

let str = 'Good Evening';
let a = str.split(' ');
console.log(a);


