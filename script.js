let scoreOf1 = 0;
let scoreOf2 = 0;
let topPos1 = 50;
let leftPos1 = 50;
let topPos2 = 50;
let leftPos2 = 50;
let topPosT = Math.floor(Math.random() * (95 - 5) + 5);
let leftPosT = Math.floor(Math.random() * (95 - 5) + 5);
let play = false;
target.style.top = topPosT + '%';
target.style.left = leftPosT + '%';
let IsReadyPlayer1 = false;
let IsReadyPlayer2 = false;
let chooseMode = "";

document.getElementById('audio1').volume = 0.3;

let setNewTargetPos = function() {
    topPosT = Math.floor(Math.random() * (95 - 5) + 5);
    leftPosT = Math.floor(Math.random() * (95 - 5) + 5);
    console.log('top pos ' + topPosT)
    console.log('left pos ' + leftPosT)
    target.style.top = topPosT + '%';
    target.style.left = leftPosT + '%';
};

let checker = () => {
    if (topPos1 === topPosT && leftPos1 === leftPosT) {
        setNewTargetPos();
        scoreOf1++;
        score1.innerText = scoreOf1;
    } else if (topPos2 === topPosT && leftPos2 === leftPosT) {
        setNewTargetPos();
        scoreOf2++;
        score2.innerText = scoreOf2;
    }
};

let PVPStart = () => {
    play = true;
    document.getElementById("main-wrap").style.display = 'none';
    document.getElementById("game-mode").style.display = 'none';
    document.getElementById("pvp-mode-wrap").style.display = 'block';
    if (play === true) {
        document.body.onkeyup = function(e) {
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
        };
    } else {
        document.body.onkeyup = function() {}
    }
}

document.getElementById("main-wrap").onfocus = function () {
    document.getElementById("audio1").play();
    document.getElementById("audio1").volume = 0.3;
};

document.getElementById("main-wrap").onblur = function () {
    document.getElementById("audio1").pause();
    document.getElementById("audio1").volume = 0.3;
};

document.getElementById('customRange1 music-volume').onchange = function () {
    document.getElementById('audio1').volume = document.getElementById('customRange1 music-volume').value / 100;
};

document.getElementById('main__btn').onclick = function () {
    document.getElementById('main__btn').style.animation = 'btnclick .5s 1';
    let x = setTimeout(function () {
        document.getElementById("main-wrap").style.filter = 'blur(10px)'
        document.getElementById("game-mode").style.display = 'flex';
        document.getElementById("game-mode").style.animation = 'game-mode 1s 1';
        setTimeout(function () {
            document.getElementById("game-mode__inner").style.display = 'flex';
            document.getElementById("main-wrap").onclick = function () {
                document.getElementById("game-mode__inner").style.visibility = 'hidden';
                document.getElementById("game-mode").style.animation = 'game-mode-hide 1s 1';
                setTimeout(function () {
                    document.getElementById("game-mode").style.display = 'none';
                    document.getElementById("main-wrap").style.filter = 'blur(0px)'
                    document.getElementById("game-mode").style.animation = '';
                    document.getElementById("main-wrap").onclick = function () {};
                }, 999)
            }
        }, 999)
        document.getElementById('main__btn').style.animation = 'none';
    }, 550)
};

document.getElementById('main-wrap').onmousemove = function () {
    document.getElementById('audio1').play();
};

document.getElementById("main__settings").onclick = function () {
    document.getElementById("main-wrap").style.transition = '0.3s';
    document.getElementById("main-wrap").style.filter = 'blur(10px)';
    document.getElementById("main__settings_sets").style.display = 'block';
    document.getElementById("settings-frame").style.display = 'flex';
    document.getElementById("settings-frame").style.animation = 'menu-show 1s 1';
    document.getElementById("main__settings").style.display = 'none';
    setTimeout(function () {
        document.getElementById("settings__inner").style.display = 'flex';
        document.getElementById("settings-frame").style.animation = '';
    }, 990)
};

document.getElementById("main__settings_sets").onclick = function () {
    document.getElementById("main__settings_sets").style.display = 'none';
    document.getElementById("main__settings").style.display = 'flex';
    document.getElementById("settings-frame").style.animation = 'menu-hide 1s 1';
    document.getElementById("settings__inner").style.display = 'none';
    document.getElementById("main__settings").style.display = 'flex';
    setTimeout(function () {
        document.getElementById("settings-frame").style.animation = '';
        document.getElementById("main-wrap").style.filter = 'blur(0)';
        document.getElementById("settings-frame").style.display = 'none';
    }, 990)
};

let openSkins = () => {
    document.getElementById("game-mode__inner").style.display = 'none';
    document.getElementById("game-mode__inner-skins").style.display = 'flex';
}

let changeCheckboxStatus = (checkboxId) => {
    document.getElementById(checkboxId).style.backgroundImage = "url(./btns-set/ready.svg)"
}

document.getElementById("player-1-ready").onclick = function () {
    IsReadyPlayer1 = true;
    changeCheckboxStatus("player-1-ready");
    if (IsReadyPlayer1 === true && IsReadyPlayer2 === true) {
        if (chooseMode === "normal") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        } else if (chooseMode === "pac-man"){
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        } else if (chooseMode === "pvp"){
            PVPStart();
        } else if (chooseMode === "timeout") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        }
    }
}

document.getElementById("player-2-ready").onclick = function () {
    IsReadyPlayer2 = true;
    changeCheckboxStatus("player-2-ready");
    if (IsReadyPlayer1 === true && IsReadyPlayer2 === true) {
        if (chooseMode === "normal") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        } else if (chooseMode === "pac-man"){
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        } else if (chooseMode === "pvp"){
            PVPStart();
        } else if (chooseMode === "timeout") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        }
    }
}

document.getElementById('game-mode-checkbox game-mode_1').onclick = function () {
    openSkins();
    chooseMode = "normal";
}
document.getElementById('game-mode-checkbox game-mode_2').onclick = function () {
    openSkins();
    chooseMode = "pac-man";
}
document.getElementById('game-mode-checkbox game-mode_3').onclick = function () {
    openSkins();
    chooseMode = "pvp";
}
document.getElementById('game-mode-checkbox game-mode_4').onclick = function () {
    openSkins();
    chooseMode = "timeout";
}
