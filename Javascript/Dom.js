let ChangeText =()=>{
    let Selected=document.getElementById('msg')

    // Selected.innerHTML='BYE'
    console.log(Selected.innerHTML);
    console.log(Selected.innerText);
    console.log(Selected.textContent)

    // Selected.style.color='red'
    // Selected.style.backgroundColor='yellow'

    // Selected.style.cssText=`color:red ;background:yellow`;
}


let boxes=()=>{
    let box=document.getElementsByClassName('box');
    box[0].innerHTML="box";
    box[1].style.cssText=`background:yellow`;
    box[2].style.cssText =`border-radius:50%`;

}
// let images1=document.getElementsByTagName('img');
let imgs=()=>{
let images1=document.getElementsByTagName('img');
        images1[0].src='./images/card5img.jpeg'
}
let imgs2=()=>{
    let images2=document.getElementsByTagName('img');
    images2[0].src='./images/card3img.jpeg'
    }