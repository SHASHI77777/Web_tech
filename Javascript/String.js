// //!----------------------
// let str ='javascript'
// console.log(str);
// console.log(typeof str);
// console.log(str.length);
// console.log(`hello ${str}`);
// //!----------------------
// let para ="nerijorojfoipesoljfsewjfojfoewfoeffjffj"
// console.log(para);
// console.log(para.toLowerCase());
// console.log(para.toUpperCase());
// console.log(para.startsWith('ner'));
// console.log(para.startsWith('fddner'));
// //!---------------------- 
// let string='Javascript'
// console.log(string);
// console.log(string.length);
// console.log(string.charAt(1));
// console.log(string.charCodeAt(1));
// //!---------------------- path of  string ---------------------
// let res =str.substring(0,4)
// console.log(res);
// console.log(str.substring(6,9));
// console.log(str.substring(5,10));
// console.log(str.substring(7,8));
// //!----------------------
// console.log(string.substr(0,4));
// console.log(string.substr(7,1));

// //!-------------------------
// console.log(str.slice(-10,-6));
// console.log(str.slice(0,4));
// console.log(str.slice(0,-6));
// console.log(str.slice(-10,4));

// //todo :----- path of  string  we are using above methods -----:
// //!--------------
// let str1='React JS'
// console.log('I LOVE '+str+" & "+str1);
// console.log('I LOVE',str,"&",str1);
// console.log(`I LOVE ${str} & ${str1}`);
// console.log('I Love '+str.concat(' & ' +str1));
//!--------------


// let str2='       prepare for mock         '
// console.log(str2);
// console.log(str2.length);

// let t1 = str2.trimEnd()
// console.log(t1);
// console.log(t1.length);


// let t2 = str2.trimStart()
// console.log(t2);
// console.log(t2.length);

// let t3 = str2.trim()
// console.log(t3);
// console.log(t3.length);


// let string2="welcome "
// console.log(string2.repeat(5));

// let news = ()=>
// {
//     for (let i = 65; i <= 90; i++) {
//         console.log(String.fromCharCode(i) + " : " + i);
//       }      
// }
// news()

//? sPalindrome or not 
 
    // function isPalindrome(str) {
    //     let lowStr = str;
    //     let  revStr = lowStr.split('').reverse();
    //     return lowStr === revStr;
    // }
    
    // console.log(isPalindrome('Shashi')); 
    
//? sPalindrome or not  shortcut 

let str ='madan'
let res =  str.split('').reverse().join("");
(str == res)? console.log(str + ' is a palindrome'): console.log(str  + ' is a not  palindrome')


 