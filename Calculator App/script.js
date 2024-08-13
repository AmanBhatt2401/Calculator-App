let user=document.querySelector("#Username");
let pass=document.querySelector("#Password");
let form=document.querySelector(".form");
let btn=document.querySelector(".btn");


btn.addEventListener("click",(evt)=>{
     console.log(innerText=user.value);
     console.log(innerText=pass.value);
     evt.preventDefault();
})