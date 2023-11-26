const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
console.log(choicesBox)
const nextBtn = document.querySelector('.nextBtn');
//make an array of objects stores q .a. o





// const url = 'https://ases-quiz-api1.p.rapidapi.com/questions/random/20';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9290279534msh5c65d5a87f86f8ap1e8879jsn63652ee01683',
// 		'X-RapidAPI-Host': 'ases-quiz-api1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


const quiz =[
{
    question:" Q-1. which of following is not a css box model property?",
    choices:["margine","padding","border-radius","border-collapse"],
    answer:"border-collapse" 
},
{
    question:" Q-2. which of the following javascript data type?",
    choices:["String","boolean","object","float"],
    answer:"float"   
},
{
    question:" Q-3. which of the following is not a valid way to declare a function in java?",
    choices:["function myfunction(){}","let myfunction=function(){};","myFunction: function() {}","All of the Above"],
    answer:"myFunction: function() {}" 
},
{
question:" Q-4. what is the purpose of the this keyword is javascript?",
choices:["it refers to the current function","it refers to  the current object","it refers to the current location","All of the Above"],
answer:"it refers to  the current object"   
},


];

//makeing  variable
let currentQuestionIndex = 0;

let index=0;
let choicese =""
//arrow function to show questions
const showQuestions =() =>{


  
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;
    //console.log(questionDetails);
    choicesBox.textContent="";
    for(let i=0; i<questionDetails.choices.length;i++){
        const currentchoice = questionDetails.choices[i];
        const choiceDiv=document.createElement('div');
        
        choiceDiv.textContent =currentchoice;

choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click',(e)=>{
                    console.log(i)
                choiceDiv.style.backgroundColor="green"
                index=i;
                choicese=currentchoice
                console.log(choicese)


        })


       

    }
}



const choice =document.getElementsByClassName("choice")

//     const choices =Array.from(choice)
console.log(choice)


// choices[0].addEventListener('click',(e)=>{

//     index=0


// })
// choices[1].addEventListener('click',(e)=>{

//     index=1


// })
// choices[2].addEventListener('click',(e)=>{

//     index=2


// })
// choices[3].addEventListener('click',(e)=>{

//     index=3


// })



const checkAnswer=(e) =>{
    // const selectedChoice = document.querySelector('selected');
    console.log(e);
   
    if(choicese === quiz[currentQuestionIndex].answer){
        alert("correct Answer")

    }
   else{
       alert("wrong answer!");
    }
   

}
//button re addEventListener add hela question show kariba 
showQuestions();
nextBtn.addEventListener('click',( e)=>{
    checkAnswer(e);
if(currentQuestionIndex< quiz.length){
    currentQuestionIndex++;

    if(currentQuestionIndex===quiz.length)
    {
        currentQuestionIndex=0;
    }
    showQuestions();
}
});