// let pro = new Promise((res, rej) => {
//   if (true) {
//     res("selected");
//   } else {
//     rej("not selected");
//   }
// });

// console.log(pro);

// pro.then((data)=>{
//     console.log(data);
// })

// pro.catch((err)=>{
//     console.log(err);
// })

//!--------------

// new Promise((res, rej) => {
//   if (res) {
//     res("selected");
//   } else {
//     rej("not selected");
//   }
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


  //!--------------

//   new Promise((res, rej) => {

//     (true)?res("mock is cleared"):rej("moye moye")}).then(data => console.log(data)).catch(err => console.log(err))
  
//!--------------


let fun1=()=>{
    return 'welcome';
}

let fun2=()=>{
    return  new Promise ((res )=>{
        setTimeout(()=>{
            res(' to')
        },2000)
    })
}

let fun3=()=>{
    return  new Promise ((res )=>{
        setTimeout(()=>{
            res(' mock')
        },3000)
    })
}

let main=async()=>{
   let htmlElem = document.getElementById('abc')

   htmlElem.innerText=await fun1()
   htmlElem.innerText+=await fun2()
   htmlElem.innerText+=await fun3()
}
main()