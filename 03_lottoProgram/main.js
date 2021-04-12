let num = [];
var temp = 0;
const startBtn = document.querySelector('.js-startBtn');
const selectBtn = document.querySelector('.js-selectBtn');
const selectedBalls = document.querySelector('.selectedBalls');
const balls = document.querySelectorAll('.balls');
const resetBtn = document.querySelector('.js-resetBtn');

function getNumber() {
    for (let i = 0; i < 7; i++) {
        num[i] = getNumRandom(45);
        for (let j = 0; j < i; j++) {
            if (num[i] === num[j]) {
                i--;
            }
        }
    }
    for (let i = 0; i < num.length; i++) {

        for (let j = 0; j < num.length; j++) {

            if (num[i] < num[j]) {
                temp = num[i];
                num[i] = num[j];
                num[j] = temp;
                temp = 0;
            }
        }
    }
    console.log(num);

}

function getNumRandom(num) {
    return Math.floor(Math.random() * num + 1);
}

function getPositionRand(position) {
    return (Math.random() * ((position + 110) - (position - 110)) + (position - 110)) + 'px';
}
var target = document.getElementById("lotto");



/*
200px ~ 420px t-b
150px ~ 380px l-r
*/


startBtn.addEventListener('click', getNumber);
startBtn.addEventListener('click', showBalls);


var interval;

function showBalls() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].classList.toggle('showing');
    }
    intervalOnOff();
}

function intervalOnOff() {
    if (balls[0].classList.contains('showing')) {
        interval = setInterval(moveBalls, 100);
    } else {
        clearInterval(interval);
    }
}

function moveBalls() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].style.transform = 'translateX(' + getPositionRand(0) + ')' + 'translateY(' + getPositionRand(0) + ')';
    }
}


function selectedImg() {
    for (let i = 0; i < num.length - 1; i++) {
        var selectBall = document.createElement('span');
        selectBall.classList.add('selectedBall')
        var selectedBall = document.createElement('span');
        selectedBall.append(num[i]);
        selectedBall.classList.add('selectedBallNum');
        var selectBallImg = document.createElement('img');
        selectBall.append(selectBallImg);

        if (num[i] <= 10) {
            selectBallImg.src = '1_10.png';
        } else if (num[i] > 10 && num[i] <= 20) {
            selectBallImg.src = '11_20.png';
        } else if (num[i] > 20 && num[i] <= 30) {
            selectBallImg.src = '21_30.png';
        } else if (num[i] > 30 && num[i] <= 40) {
            selectBallImg.src = '31_40.png';
        } else if (num[i] > 40 && num[i] <= 45) {
            selectBallImg.src = '41_45.png';
        }

        selectBall.append(selectedBall);
        selectedBalls.append(selectBall);
    }
    var emptySpan = document.createElement('span');
    emptySpan.style.width = '100px';
    emptySpan.innerHTML = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
    selectedBalls.append(emptySpan);

    selectBall.append(selectBallImg);
    for (let i = num.length - 1; i < num.length; i++) {
        var selectBall = document.createElement('span');
        selectBall.classList.add('selectedBall')
        var selectedBall = document.createElement('span');
        selectedBall.append(num[i]);
        selectedBall.classList.add('selectedBallNum');
        var selectBallImg = document.createElement('img');
        selectBall.append(selectBallImg);

        if (num[i] <= 10) {
            selectBallImg.src = '1_10.png';
        } else if (num[i] > 10 && num[i] <= 20) {
            selectBallImg.src = '11_20.png';
        } else if (num[i] > 20 && num[i] <= 30) {
            selectBallImg.src = '21_30.png';
        } else if (num[i] > 30 && num[i] <= 40) {
            selectBallImg.src = '31_40.png';
        } else if (num[i] > 40 && num[i] <= 45) {
            selectBallImg.src = '41_45.png';
        }

        selectBall.append(selectedBall);
        selectedBalls.append(selectBall);
        selectedBalls.innerHTML += '<br>';
    }
    num = [];
    getNumber();
}
selectBtn.addEventListener('click', selectedImg)

resetBtn.addEventListener('click', reset);

function reset() {
    while (selectedBalls.hasChildNodes()) {
        selectedBalls.removeChild(selectedBalls.firstChild);
    }
}