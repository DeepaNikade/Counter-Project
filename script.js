const dec=document.getElementById("decrease");
const res=document.getElementById("reset");
const incre=document.getElementById("increase");
let count=0;
dec.addEventListener('click',()=>{
    count-=1;
    document.getElementById("countLabel").innerHTML=count;
})
res.addEventListener('click',()=>{
    count=0;
    document.getElementById("countLabel").innerHTML=count;
})
incre.addEventListener('click',()=>{
    count+=1;
    document.getElementById("countLabel").innerHTML=count;
})

