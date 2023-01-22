let scores = document.getElementById('highscores');
let clearHighscore = document.getElementById('clear');

let render = scores.appendChild(document.createElement('li'));
render.textContent = localStorage.getItem('user') + ' -- ' + localStorage.getItem('score');

clearHighscore.addEventListener('click', function(){
    render.innerHTML = '';
});
