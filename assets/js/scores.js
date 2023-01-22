let scores = document.getElementById('highscores');

let render = scores.appendChild(document.createElement('li'));
render.textContent = localStorage.getItem('user') + ' -- ' + localStorage.getItem('score');
