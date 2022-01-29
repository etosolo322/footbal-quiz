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
    document.querySelectorAll('.choise').forEach((el)=> el.onclick = ()=>{
        console.log(numberQuestion)
        console.log(questions.length-1)
        if (el.innerHTML===questions[numberQuestion].true){
           rezalt++;
        }
        if(numberQuestion<questions.length-1){            
            creactorQuestion(++numberQuestion)
        } else{
            document.querySelector('.question-text').innerHTML=`Ты правильно ответил на ${rezalt} вопроса. Это ${rezalt/5}% верных ответов`;
        }
        document.querySelector('#progressbar').style.opacity=`${progres-=20}%`;
    })

const creactorQuestion = (i)=>{
    let number = generateArrayRandomNumber (0, 3)
    document.querySelector('.question-text').innerHTML=questions[i].quest;
    document.querySelectorAll('.choise')[number[0]].innerHTML=questions[i].true;
    document.querySelectorAll('.choise')[number[1]].innerHTML=questions[i].varA;
    document.querySelectorAll('.choise')[number[2]].innerHTML=questions[i].varB;
    document.querySelectorAll('.choise')[number[3]].innerHTML=questions[i].varC;
}



console.log(document.querySelector('#selectA').style)

window.onload = ()=>{
    creactorQuestion(numberQuestion)
}