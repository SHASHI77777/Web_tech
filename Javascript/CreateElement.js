
// let newHtmlElement=()=>{
//     let newTag=document.createElement('in')
//      newTag.innerText='welcome'
//      document.body.appendChild(newTag)
// }


let newHtmlElem=(e)=>{
    event.preventDefault()
    // let tagname = e.target[0].value
    // let data = e.target[1].value

    let newTag=document.createElement(e.target[0].value)
     newTag.innerText=e.target[1].value
     document.body.appendChild(newTag)
}
