//! find the largest value in this array
// let arr=[10,45,65,38,12,23,31,56,95,75]
//  arr.sort((a,b) => b - a);
// console.log(arr[0]);

//?---------------------
// let large = Math.max(10,45,65,38,12,23,31,56,95,75)
// console.log(large);

//?---------------------
// let maximum= (...values)=>{
//     let max = values.sort((a,b)=>{
//         return b-a;
//     })
//     return Number(max[0])
// }

// let Max=maximum(10,45,65,38,12,23,31,56,95,75)
// console.log(Max);

//?-------------------------

// let small = Math.min(10,45,65,38,12,23,31,56,95,75)
// console.log(small);

// let num = (...arr) => {
//   let large = Math.max(...arr);
//   console.log(large);

//   console.log(Math.min(...arr));
// };

// num(10, 45, 65, 38, 12, 23, 31, 56, 95, 75);
//?------------------------- PI value
// console.log(Math.PI);
// //?------------------------- power value
// console.log(Math.pow(8, 3));
// //?------------------------- square root
// console.log(Math.sqrt(25));
// //?------------------------- round value
// console.log(Math.round(250.56));
// console.log(Math.round(250.49));
// //?-------------------------  ignore decimal value
// console.log(Math.floor(250.56));
// console.log(Math.floor(250.12));
// //?-------------------------  give next value if decimal is there
// console.log(Math.ceil(250.56));
// console.log(Math.ceil(250.1));
//?-------------------------

let generateOTP = () => {
  let randomnum = Math.random() * 10000;
  let Otp = Math.floor(randomnum);
//!-- using tenary operator 

  Otp > 1000 && Otp < 10000 ? console.log(Otp) : generateOTP();

//!-- using if-else operator 
  //     if (Otp>=1000 && Otp<=9999){
  //         console.log(Otp);
  //     }else{
  //         generateOTP()
  //     }
}

generateOTP();
