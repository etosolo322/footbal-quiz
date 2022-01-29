document.querySelector('#progressbar')
let progres = 100;

setInterval(()=>{
    document.querySelector('#progressbar').style.opacity=`${progres-=10}%`;
 
},1000)


console.log(document.querySelector('#selectA').style)