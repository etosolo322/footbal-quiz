document.querySelector('#progressbar')
let progres = 100;
setInterval(()=>{
    document.querySelector('#progressbar').style.height=`${progres}%`;
    progres-=10;
},1000)