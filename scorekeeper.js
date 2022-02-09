let p1 = 0;
let p2 = 0;
let max = 1;
let winningScore = 3;
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let reset = document.querySelector('#reset');
let maxPoints = document.querySelector('#maxPoints');
maxPoints.addEventListener('change', (e) => {
    winningScore = parseInt(this.value);
    reload();
})
let isGameOver = false;

p1Button.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1 = p1 + 1;
        if (p1 === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.innerText = p1;
    }
})
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2 = p2 + 1;
        if (p2 === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.innerText = p2;
    }
})

reset.addEventListener('click', (e) => {
    reload();
    maxPoints.value = '3';
})

function reload() {
    p1 = 0;
    p2 = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}