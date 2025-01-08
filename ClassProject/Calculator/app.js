let input =document.querySelector('input')

let getValue=(e)=>{
    let val=e.target.innerText
   input.value+=val
}

let finalResult=()=>{
    let res = eval(input.value)
    input.value = res
}

let clearAll=()=>{
    input.value= ""
}