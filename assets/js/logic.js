import questions from "./questions.js";

console.log(questions)

let timer = 0;
let startButton = document.querySelector('#start');
let startScreen = document.querySelector('#start-screen');

startButton.addEventListener('click', function(event) {
startScreen.setAttribute('class', 'hide');

    console.log('hello mother friggin world');
});

console.log(startScreen);