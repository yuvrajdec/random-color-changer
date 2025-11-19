const body = document.querySelector("body");

const start = document.querySelector("#start");

const stop = document.querySelector("#stop"); 

const randomC = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i=0;i<6;i++){
        color = color + hex[Math.floor(Math.random()*16)]
    } return color;
};

console.log(randomC());

let intervlId;

start.addEventListener("click",function change(){

    if (!intervlId){
        intervlId = setInterval(changebg,1000);
    }
   
   function changebg(){
    body.style.backgroundColor = `${randomC()}`;
   } 
});

stop.addEventListener("click",function pause(e){
        clearInterval(intervlId);
        intervlId = null;
    
    
});


