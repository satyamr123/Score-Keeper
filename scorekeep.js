//retracted version of code
let max = 1;
let winningScore = 3;
let reset = document.querySelector('#reset');
let maxPoints = document.querySelector('#maxPoints');
const p1 = {
    score: 0,
    Button: document.querySelector('#p1Button'),
    Display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    Button: document.querySelector('#p2Button'),
    Display: document.querySelector('#p2Display')
}

maxPoints.addEventListener('change', (e) => {
    winningScore = parseInt(maxPoints.value);
    reload();
})

let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score = player.score + 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.Display.classList.add('has-text-success');
            opponent.Display.classList.add('has-text-danger');
            player.Button.disabled = true;
            opponent.Button.disabled = true;
        }
        player.Display.innerText = player.score;
    }
}

p1.Button.addEventListener('click', function (e) {
    updateScores(p1, p2);
})
p2.Button.addEventListener('click', function (e) {
    updateScores(p2, p1);
})
reset.addEventListener('click', reload)

function reload() {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.Display.innerText = 0;
        p.Display.classList.remove('has-text-success', 'has-text-danger');
        p.Button.disabled = false;
    }

    isGameOver = false;



}