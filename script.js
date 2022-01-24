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
let pos = 3;

document.getElementById('audio1').volume = 0.3;
document.getElementById("btnSound").volume = 0.2;

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
        document.getElementById("btnSound").src = './sounds/catching-ball-sound.wav';
        document.getElementById("btnSound").play();
        setNewTargetPos();
        scoreOf1++;
        score1.innerText = scoreOf1;
    } else if (topPos2 === topPosT && leftPos2 === leftPosT) {
        document.getElementById("btnSound").src = './sounds/catching-ball-sound.wav';
        document.getElementById("btnSound").play();
        setNewTargetPos();
        scoreOf2++;
        score2.innerText = scoreOf2;
    }
};

let PVPStart = () => {
    document.getElementById("audio1").src = './sounds/pvp-bg-sound.mp3';
    document.getElementById("audio1").play();
    play = true;
    $('#game-mode__close-btn').css('display', 'none');
    document.getElementById("main-wrap").style.display = 'none';
    document.getElementById("game-mode").style.display = 'none';
    document.getElementById("pvp-mode-wrap").style.display = 'block';
    if (play === true) {
        document.body.onkeyup = function(e) {
            document.getElementById("btnSound").src = './sounds/jump-sound.wav';
            document.getElementById("btnSound").play();
            if (e.keyCode === 38) {
                topPos1--;
                if (topPos1 <= 5) {
                    player1.style.display = 'none';
                    topPos1 = 95;
                    player1.style.top = topPos1 + '%';
                    setTimeout(function() {
                        player1.style.display = 'block';
                    }, 50)
                } else {
                    player1.style.top = topPos1 + '%';
                }
            } else if (e.keyCode === 40) {
                topPos1++;
                if (topPos1 >= 95) {
                    player1.style.display = 'none';
                    topPos1 = 5;
                    player1.style.top = topPos1 + '%';
                    setTimeout(function() {
                        player1.style.display = 'block';
                    }, 50)
                } else {
                    player1.style.top = topPos1 + '%';
                }
            } else if (e.keyCode === 37) {
                leftPos1--;
                if (leftPos1 <= 5) {
                    player1.style.display = 'none';
                    leftPos1 = 95;
                    player1.style.left = leftPos1 + '%';
                    setTimeout(function() {
                        player1.style.display = 'block';
                    }, 50)
                } else {
                    player1.style.left = leftPos1 + '%';
                }
            } else if (e.keyCode === 39) {
                leftPos1++;
                if (leftPos1 >= 95) {
                    player1.style.display = 'none';
                    leftPos1 = 5;
                    player1.style.left = leftPos1 + '%';
                    setTimeout(function() {
                        player1.style.display = 'block';
                    }, 50)
                } else {
                    player1.style.left = leftPos1 + '%';
                }
            } else if (e.keyCode === 87) {
                topPos2--;
                if (topPos2 <= 5) {
                    player2.style.display = 'none';
                    topPos2 = 95;
                    player2.style.top = topPos2 + '%';
                    setTimeout(function() {
                        player2.style.display = 'block';
                    }, 50)
                } else {
                    player2.style.top = topPos2 + '%';
                }
            } else if (e.keyCode === 83) {
                topPos2++;
                if (topPos2 >= 95) {
                    player2.style.display = 'none';
                    topPos2 = 5;
                    player2.style.top = topPos2 + '%';
                    setTimeout(function() {
                        player2.style.display = 'block';
                    }, 50)
                } else {
                    player2.style.top = topPos2 + '%';
                }
            } else if (e.keyCode === 65) {
                leftPos2--;
                if (leftPos2 <= 5) {
                    player2.style.display = 'none';
                    leftPos2 = 95;
                    player2.style.left = leftPos2 + '%';
                    setTimeout(function() {
                        player2.style.display = 'block';
                    }, 50)
                } else {
                    player2.style.left = leftPos2 + '%';
                }
            } else if (e.keyCode === 68) {
                leftPos2++;
                if (leftPos2 >= 95) {
                    player2.style.display = 'none';
                    leftPos2 = 5;
                    player2.style.left = leftPos2 + '%';
                    setTimeout(function() {
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
};

document.getElementById("main-wrap").onfocus = function() {
    document.getElementById("audio1").play();
    document.getElementById("audio1").volume = 0.3;
};

document.getElementById("main-wrap").onblur = function() {
    document.getElementById("audio1").pause();
    document.getElementById("audio1").volume = 0.3;
};

document.getElementById('customRange1 music-volume').onchange = function() {
    document.getElementById('audio1').volume = document.getElementById('customRange1 music-volume').value / 100;
};

document.getElementById('customRange1 sounds-volume').onchange = function() {
    document.getElementById('btnSound').volume = document.getElementById('customRange1 sounds-volume').value / 100;
    document.getElementById("btnSound").src = './sounds/go-home.mp3';
    document.getElementById("btnSound").play();
};

$('#main__btn').click(function() { //click on main btn
    document.getElementById("btnSound").src = './sounds/go-home.mp3';
    document.getElementById("btnSound").play();
    $('#main__btn').css('animation', 'btnclick .5s 1') //animation fo click
    setTimeout(function() { //timeout for animation
        $('#main__btn').css('animation', ''); //clear main-btn animation
        $('#game-mode').css({
            'display': 'flex',
            'animation': 'game-mode 1s 1'
        }); //show game mode menu and set animation of opening
        $('#main-wrap').css('filter', 'blur(10px)'); //bluring main
    }, 550)
    setTimeout(function() {
        $('#main__settings').css('display', 'none');
        $('#game-mode__inner').css('display', 'flex'); //show game mode inner content
        $('#game-mode').css('animation', '') //clear animation
        $('#game-mode__close-btn').css('display', 'block');
    }, 1549);
});

$('#game-mode__close-btn').click(function() { // setting of closing function
    document.getElementById("btnSound").src = './sounds/go-home.mp3';
    document.getElementById("btnSound").play();
    $("#game-mode__inner").css('display', 'none');
    $("#game-mode__inner-skins").css('display', 'none');
    $("#game-mode").css('animation', 'game-mode-hide 1s 1');
    setTimeout(function() {
        $('#game-mode').css({
            'display': 'none',
            'animation': ''
        });
        $('#game-mode__close-btn').css('display', 'none');
        $('#main__settings').css('display', 'flex');
        $('#main-wrap').css('filter', 'blur(0px)');
    }, 999)
})

$('#main-wrap').mousemove(function() {
    document.getElementById('audio1').play();
})

$('#main__settings').click(function() {
    document.getElementById("btnSound").src = './sounds/go-home.mp3';
    document.getElementById("btnSound").play();
    $('#main-wrap').css({
        "transition": '0.3s',
        "filter": 'blur(10px)',
    });
    $('#main__settings_sets').css('display', 'block');
    // $('#main__settings').css('dispaly', 'none');
    $('#settings-frame').css({
        'display': 'flex',
        'animation': 'menu-show 1s 1'
    });
    setTimeout(function() {
        $('#main__settings').css('display', 'none');
        $("#settings__inner").css('display', 'flex');
        $("#settings-frame").css('animation', '');
    }, 990)
})

$('#main__settings_sets').click(function() {
    document.getElementById("btnSound").src = './sounds/go-home.mp3';
    document.getElementById("btnSound").play();
    $('#main__settings_sets').css('display', 'none');
    $('#main__settings').css('display', 'flex');
    $('#settings-frame').css('animation', 'menu-hide 1s 1');
    $('#settings__inner').css('display', 'none');
    setTimeout(function() {
        $('#settings-frame').css({
            'animation': '',
            'display': 'none',
        });
        $('#main-wrap').css('filter', 'blur(0)');
        $('#main__settings').css('display', 'flex');
    }, 990)
});

let openSkins = () => {
    $('#game-mode__inner').css('display', 'none');
    $('#game-mode__inner-skins').css('display', 'flex');
};

let changeCheckboxStatus = (checkboxId) => {
    $('#' + checkboxId).css('backgroundImage', 'url(./btns-set/ready.svg)');
};

$('#player-1-ready').click(function() {
    document.getElementById("btnSound").src = './sounds/switchGmSound.mp3';
    document.getElementById("btnSound").play();
    IsReadyPlayer1 = true;
    changeCheckboxStatus("player-1-ready");
    if (IsReadyPlayer1 === true && IsReadyPlayer2 === true) {
        if (chooseMode === "normal") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        } else if (chooseMode === "pac-man") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        } else if (chooseMode === "pvp") {
            PVPStart();
            $('#player-1-name').html($('#player1-name-inp').val());
            $('#player-2-name').html($('#player2-name-inp').val());
        } else if (chooseMode === "timeout") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        }
    }
});

$('#player-2-ready').click(function() {
    document.getElementById("btnSound").src = './sounds/switchGmSound.mp3';
    document.getElementById("btnSound").play();
    IsReadyPlayer2 = true;
    changeCheckboxStatus("player-2-ready");
    if (IsReadyPlayer1 === true && IsReadyPlayer2 === true) {
        if (chooseMode === "normal") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        } else if (chooseMode === "pac-man") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        } else if (chooseMode === "pvp") {
            PVPStart();
            $('#player-1-name').html($('#player1-name-inp').val());
            $('#player-2-name').html($('#player2-name-inp').val());
        } else if (chooseMode === "timeout") {
            alert("Mode in development! Deploy is planed for 16.01.2022 to 31.01.2022")
        }
    }
});

$('#game-mode_1').click(function() {
    document.getElementById("btnSound").src = './sounds/game-mode-choose-sound.wav';
    document.getElementById("btnSound").play();
    openSkins();
    chooseMode = "normal";
});
$('#game-mode_2').click(function() {
    document.getElementById("btnSound").src = './sounds/game-mode-choose-sound.wav';
    document.getElementById("btnSound").play();
    openSkins();
    chooseMode = "pac-man";
});
$('#game-mode_3').click(function() {
    document.getElementById("btnSound").src = './sounds/game-mode-choose-sound.wav';
    document.getElementById("btnSound").play();
    openSkins();
    chooseMode = "pvp";
});
$('#game-mode_4').click(function() {
    document.getElementById("btnSound").src = './sounds/game-mode-choose-sound.wav';
    document.getElementById("btnSound").play();
    openSkins();
    chooseMode = "timeout";
});

let dotesPick = () => {
    $('.game-mode__circle').css('opacity', '0.6');
    $('#gm-circle' + pos).css('opacity', '1');
}

$('#change__previous').click(function() {
    if (pos === 1) {
        $('#game-mode__cards').css('left', 'calc((-90vw + 230px) + (33px / 2))');
        pos = 4;
    } else if (pos === 2) {
        $('#game-mode__cards').css('left', 'calc((90vw - 230px) - (33px / 2))');
        pos = 1;
    } else if (pos === 3) {
        $('#game-mode__cards').css('left', 'calc((30vw - 100px) + (33px / 2))');
        pos = 2;
    } else if (pos === 4) {
        $('#game-mode__cards').css('left', 'calc((-60vw + 200px - 33px) / 2)');
        pos = 3;
    }
    dotesPick();
    document.getElementById("btnSound").src = './sounds/switchGmSound.mp3';
    document.getElementById("btnSound").play();
});

$('#change__next').click(function() {
    if (pos === 1) {
        $('#game-mode__cards').css('left', 'calc((30vw - 100px) + (33px / 2))');
        pos = 2;
    } else if (pos === 2) {
        $('#game-mode__cards').css('left', 'calc((-60vw + 200px - 33px) / 2)');
        pos = 3;
    } else if (pos === 3) {
        $('#game-mode__cards').css('left', 'calc((-90vw + 230px) + (33px / 2))');
        pos = 4;
    } else if (pos === 4) {
        $('#game-mode__cards').css('left', 'calc((90vw - 230px) - (33px / 2))');
        pos = 1;
    }
    dotesPick();
    document.getElementById("btnSound").src = './sounds/switchGmSound.mp3';
    document.getElementById("btnSound").play();
});