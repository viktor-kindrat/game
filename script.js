let scoreOf1 = 0;
let scoreOf2 = 0;
let topPos1 = 50;
let leftPos1 = 50;
let topPos2 = 50;
let leftPos2 = 50;
let topPosT = Math.floor(Math.random() * (95 - 5) + 5);
let leftPosT = Math.floor(Math.random() * (95 - 5) + 5);
target.style.top = topPosT + '%';
target.style.left = leftPosT + '%';

let setNewTargetPos = function() {
    topPosT = Math.floor(Math.random() * (95 - 5) + 5);
    leftPosT = Math.floor(Math.random() * (95 - 5) + 5);
    console.log('top pos ' + topPosT)
    console.log('left pos ' + leftPosT)
    target.style.top = topPosT + '%';
    target.style.left = leftPosT + '%';
}

let checker = () => {
    if (topPos1 === topPosT && leftPos1 === leftPosT) {
        setNewTargetPos();
        scoreOf1++;
        score1.innerText = scoreOf1;
    } else if (topPos2 == topPosT && leftPos2 === leftPosT) {
        setNewTargetPos();
        scoreOf2++;
        score2.innerText = scoreOf2;
    }
}

document.body.onkeyup = function(e) {
    console.log(e.keyCode);
    if (e.keyCode === 38) {
        topPos1--;
        if(topPos1 <= 5) {
            player1.style.display = 'none';
            topPos1 = 95;
            player1.style.top = topPos1 + '%';
            setTimeout(function () {
                player1.style.display = 'block';
            }, 50)
        } else {
            player1.style.top = topPos1 + '%';
        }
    } else if (e.keyCode === 40) {
        topPos1++;
        if(topPos1 >= 95) {
            player1.style.display = 'none';
            topPos1 = 5;
            player1.style.top = topPos1 + '%';
            setTimeout(function () {
                player1.style.display = 'block';
            }, 50)
        } else {
            player1.style.top = topPos1 + '%';
        }
    } else if (e.keyCode === 37) {
        leftPos1--;
        if(leftPos1 <= 5) {
            player1.style.display = 'none';
            leftPos1 = 95;
            player1.style.left = leftPos1 + '%';
            setTimeout(function () {
                player1.style.display = 'block';
            }, 50)
        } else {
            player1.style.left = leftPos1 + '%';
        }
    } else if (e.keyCode === 39) {
        leftPos1++;
        if(leftPos1 >= 95) {
            player1.style.display = 'none';
            leftPos1 = 5;
            player1.style.left = leftPos1 + '%';
            setTimeout(function () {
                player1.style.display = 'block';
            }, 50)
        } else {
            player1.style.left = leftPos1 + '%';
        }
    } else if (e.keyCode === 87) {
        topPos2--;
        if(topPos2 <= 5) {
            player2.style.display = 'none';
            topPos2 = 95;
            player2.style.top = topPos2 + '%';
            setTimeout(function () {
                player2.style.display = 'block';
            }, 50)
        } else {
            player2.style.top = topPos2 + '%';
        }
    } else if (e.keyCode === 83) {
        topPos2++;
        if(topPos2 >= 95) {
            player2.style.display = 'none';
            topPos2 = 5;
            player2.style.top = topPos2 + '%';
            setTimeout(function () {
                player2.style.display = 'block';
            }, 50)
        } else {
            player2.style.top = topPos2 + '%';
        }
    } else if (e.keyCode === 65) {
        leftPos2--;
        if(leftPos2 <= 5) {
            player2.style.display = 'none';
            leftPos2 = 95;
            player2.style.left = leftPos2 + '%';
            setTimeout(function () {
                player2.style.display = 'block';
            }, 50)
        } else {
            player2.style.left = leftPos2 + '%';
        }
    } else if (e.keyCode === 68) {
        leftPos2++;
        if(leftPos2 >= 95) {
            player2.style.display = 'none';
            leftPos2 = 5;
            player2.style.left = leftPos2 + '%';
            setTimeout(function () {
                player2.style.display = 'block';
            }, 50)
        } else {
            player2.style.left = leftPos2 + '%';
        }
    }
    checker();
}

document.getElementById('main__btn').onclick = function () {
    document.getElementById('main__btn').style.animation = 'btnclick .5s 1';
    let x = setTimeout(function () {
        document.getElementById('main__btn').style.animation = 'none';
        document.getElementById('main-wrap').style.display = 'none';
        document.getElementById('pvp-mode-wrap').style.display = 'block';
    }, 550)
}