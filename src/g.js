 const h1= document.querySelector("h1");
 const btn= document.querySelector("button");
   
 export function smooth(){
    h1.innerText="I Change to steelBlue";
    h1.style.color= "steelblue";
}

btn.addEventListener("click", smooth)
