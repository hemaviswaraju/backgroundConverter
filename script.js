let modebtn=document.querySelector(".mode");
let mode="light";
let body=document.querySelector("body");
modebtn.addEventListener("mouseover",()=>{
    if(mode=="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(mode);
});