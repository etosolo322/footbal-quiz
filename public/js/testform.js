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

let numberQuestion =0;
let rezalt = 0;
    document.querySelectorAll('.choise').forEach((el)=> el.onclick = ()=>{
        console.log(numberQuestion)
        console.log(questions.length-1)
        if (el.innerHTML===questions[numberQuestion].true){
            console.log('your right')
           rezalt++;
        }else{
            console.log('NOOO')
        }
        if(numberQuestion<questions.length-1){
            document.querySelector('#progressbar').style.opacity=`${progres-=20}%`;
            creactorQuestion(++numberQuestion)
        } else{
            console.log(`you rezult is ${rezalt}`)
        }
    })

const creactorQuestion = (i)=>{
    document.querySelector('.question-text').innerHTML=questions[i].quest;
    document.querySelector('#selectA').innerHTML=questions[i].true;
    document.querySelector('#selectB').innerHTML=questions[i].varA;
    document.querySelector('#selectC').innerHTML=questions[i].varB;
    document.querySelector('#selectD').innerHTML=questions[i].varC;
}

let progres = 100;

console.log(document.querySelector('#selectA').style)

window.onload = ()=>{
    creactorQuestion(numberQuestion)
}