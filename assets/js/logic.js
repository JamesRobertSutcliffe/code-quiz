import questions from "./questions.js";

let timer = document.getElementById('time');
let time = 60;
let startButton = document.querySelector('#start');
let startScreen = document.querySelector('#start-screen');
let questionContainer = document.querySelector('#questions');
let questionTitle = document.querySelector('#question-title');
let choices = document.querySelector('#choices');
let score = 0;
let feedback = document.querySelector('#feedback');
let endScreen = document.querySelector('#end-screen');
let final = document.querySelector('#final-score');
let initials = document.querySelector('#initials');
let sub = document.querySelector('#submit');


// Sets the timer

function clock(){
    timer.textContent = time;    
setInterval(function(){
        time--;
        timer.textContent = time;
    }, 1000)
    if (time.value == 0){
        endScreen.removeAttribute('class', 'hide');
        questionContainer.setAttribute('class', 'hide');
        final.textContent = score;
    }
};

console.log(time);


// Below functions let user know whether functions are correct or incorrect

function correct(){
feedback.innerHTML = '';
feedback.removeAttribute('class', "feedback hide");
let correct = feedback.appendChild(document.createElement('p'));
correct.textContent = 'Correct!';
setTimeout(function(){
    feedback.setAttribute('class', 'feedback hide');
}, 1000);
};

function incorrect(){
    feedback.innerHTML = '';
    feedback.removeAttribute('class', "feedback hide");
    let correct = feedback.appendChild(document.createElement('p'));
    correct.textContent = 'Wrong!';
    setTimeout(function(){
        feedback.setAttribute('class', 'feedback hide');
    }, 1000);
    };

// Start button click functions - this hides the start screen and sets off timer and firs questions

startButton.addEventListener('click', function(event) {
clock();
startScreen.setAttribute('class', 'hide');
questionContainer.removeAttribute('class', 'hide');
questionTitle.textContent = questions[0].question;
for (let x = 0; x < questions[0].answers.length; x++){
let choiceButtons = choices.appendChild(document.createElement('button'));
choiceButtons.textContent = questions[0].answers[x];
choiceButtons.setAttribute('id', questions[0].answers[x]);
}
choices.addEventListener('click', function(event) {
let userChoice = event.target.id;
if (userChoice == questions[0].correct){ 
    score = score + 20;
    correct();
    question2();
} else {
    incorrect();
    question2();
}});
});

// function setting up question 2 on answer nested in question one click targets//

function question2() {
    questionTitle.innerHTML = '';
    choices.innerHTML = '';
    questionTitle.textContent = questions[1].question;
for (let x = 0; x < questions[1].answers.length; x++){
let choiceButtons = choices.appendChild(document.createElement('button'));
choiceButtons.textContent = questions[1].answers[x];
choiceButtons.setAttribute('id', questions[1].answers[x]);
}
choices.addEventListener('click', function(event) {
    let userChoice = event.target.id;
    if (userChoice == questions[1].correct){ 
        score = score + 20;
        correct();
        question3();
    } else {
        incorrect();
        question3();
    }});
    };

    // function setting up question 3 on answer nested in question 2 click targets//

function question3() {
    questionTitle.innerHTML = '';
    choices.innerHTML = '';
    questionTitle.textContent = questions[2].question;
for (let x = 0; x < questions[2].answers.length; x++){
let choiceButtons = choices.appendChild(document.createElement('button'));
choiceButtons.textContent = questions[2].answers[x];
choiceButtons.setAttribute('id', questions[2].answers[x]);
}
choices.addEventListener('click', function(event) {
    let userChoice = event.target.id;
    if (userChoice == questions[2].correct){ 
        score = score + 20;
        correct();
        question4()
    } else {
        incorrect();
        question4();
    }});
    };

    // function setting up question 4 on answer nested in question 3 click targets//

function question4() {
    questionTitle.innerHTML = '';
    choices.innerHTML = '';
    questionTitle.textContent = questions[3].question;
for (let x = 0; x < questions[3].answers.length; x++){
let choiceButtons = choices.appendChild(document.createElement('button'));
choiceButtons.textContent = questions[3].answers[x];
choiceButtons.setAttribute('id', questions[3].answers[x]);
}
choices.addEventListener('click', function(event) {
    let userChoice = event.target.id;
    if (userChoice == questions[3].correct){ 
        score = score + 20;
        correct();
        question5();
    } else {
        incorrect();
        question5();
    }});
    };

// function setting up question 5 on answer nested in question 4 click targets //
//Hide questions div and opens end screen//

function question5() {
    questionTitle.innerHTML = '';
    choices.innerHTML = '';
    questionTitle.textContent = questions[4].question;
for (let x = 0; x < questions[4].answers.length; x++){
let choiceButtons = choices.appendChild(document.createElement('button'));
choiceButtons.textContent = questions[4].answers[x];
choiceButtons.setAttribute('id', questions[4].answers[x]);
}
choices.addEventListener('click', function(event) {
    let userChoice = event.target.id;
    if (userChoice == questions[4].correct){ 
        score = score + 20;
        correct();
        questionContainer.setAttribute('class', 'hide');
        endScreen.removeAttribute('class', 'hide');
        final.textContent = score;
    } else {
        incorrect();
        endScreen.removeAttribute('class', 'hide');
        questionContainer.setAttribute('class', 'hide');
        final.textContent = score;
    }});
    };

    // Renders the score and initials to local storage

    sub.addEventListener('click', function(event){
        localStorage.setItem("user", initials.value);
        localStorage.setItem("score", score);
        window.location.href="highscores.html";
        console.log();
    });

