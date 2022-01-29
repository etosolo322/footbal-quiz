const questions = [
    {id:1,
    quest:"Какой лист вошёл в название коварного резаного удара футболистов?",
    true:"сухой",
    varA:"банный",
    varB:"лавровый",
    varC:"кленовый"},
    {id:2,
    quest:"Какой термин есть в обиходе и футболистов, и преферансистов?",
    true:"пас",
    varA:"обводка",
    varB:"офсайд",
    varC:"вист"},
    {id:3,
    quest:"Как называется запрещённый приём в футболе?",
    true:"накладка",
    varA:"укладка",
    varB:"закладка",
    varC:"заплатка"},
    {id:4,
    quest:"Что назначает футбольный судья, подняв руку вверх?",
    true:"свободный удар",
    varA:"пенальти",
    varB:"штрафной удар",
    varC:"угловой удар"},
    {id:5,
    quest:"Что НЕ входит в стандартную экипировку футболистов?",
    true:"капа",
    varA:"щитки",
    varB:"бутсы",
    varC:"гетры"},
]

let progres = 100;
let numberQuestion =0;
let rezalt = 0;

    document.querySelectorAll('.choise').forEach((el,index,arr)=> el.onclick = ()=>{         
        console.log(index)
        el.style = 'background-color:yellow;';      
       document.querySelector('.ansver-form').style.pointerEvents='none'
        setTimeout(()=>{
            if (el.innerHTML===questions[numberQuestion].true){               
            rezalt++;
            }
            if(numberQuestion<questions.length-1){ 
                document.querySelectorAll('.choise').forEach(elem=>{
                    if (elem.innerHTML===questions[numberQuestion].true){
                        elem.style = 'background-color:green;';
                    }
                    else{
                        elem.style = 'background-color:red;';
                    }
                }) 
                setTimeout(()=>{   
                    document.querySelector('.ansver-form').style.pointerEvents='auto';     
                    document.querySelectorAll('.choise').forEach(elem=>{
                        elem.style = 'background-color:none';
                })      
                    creactorQuestion(++numberQuestion)
                },2200); 
            } else{
                document.querySelector('.ansver-form').style.display='none'; 
                document.querySelector('.question-text').innerHTML=`Ты правильно ответил на ${rezalt} вопроса. Это ${rezalt/5*100}% верных ответов`;
            }            
        },1400)
    })

const creactorQuestion = (i)=>{
    let number = generateArrayRandomNumber (0, 3)
    document.querySelector('.question-text').innerHTML=questions[i].quest;
    document.querySelectorAll('.choise')[number[0]].innerHTML=questions[i].true;
    document.querySelectorAll('.choise')[number[1]].innerHTML=questions[i].varA;
    document.querySelectorAll('.choise')[number[2]].innerHTML=questions[i].varB;
    document.querySelectorAll('.choise')[number[3]].innerHTML=questions[i].varC;
}


window.onload = ()=>{
    creactorQuestion(numberQuestion)
}