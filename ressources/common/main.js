var levelOneLearnBarScore = document.getElementById("levelOneLearnBar");
var levelOneLearnPercentage;
var levelTwoLearnBarScore = document.getElementById("levelTwoLearnBar");
var levelTwoLearnPercentage
var levelTwoQuizScore;
var openSettings = document.getElementById("settingsButton");
var closeSettings = document.getElementById("closeSettingsButton");
var settingsContainer = document.getElementById("settingsContainer");
var normalMenu = document.getElementById("menuContainer");
var resetScoreButton = document.getElementById("resetScoreButton");
var levelTwoQuizButton = document.getElementsByName("levelTwoQuizButton");
var explanation = document.getElementById("explanation");
var backToMenuExplain = document.getElementById("backToMenu");
var explainButton = document.getElementById("explainButton");
var levelOneQuizButton = document.getElementById("levelOneQuizButton");

window.onload = function() {
    if (localStorage.getItem('levelOneLearnScore') === null) {
        normalMenu.style.display = "none";
        explanation.style.display = "block";
    }
    levelOneLearnPercentage = `${(localStorage.getItem('levelOneLearnScore')/39) * 100}`;
    document.getElementById("progressBarOneLearnFull").innerHTML += Math.round(`${(localStorage.getItem('levelOneLearnScore')/39) * 100}`) + "%";
    document.getElementById("progressBarOneLearnFull").style.width = levelOneLearnPercentage + "%";
    levelTwoLearnPercentage = `${(localStorage.getItem('levelTwoLearnScore')/25) * 100}`;
    document.getElementById("progressBarTwoLearnFull").innerHTML += Math.round(`${(localStorage.getItem('levelTwoLearnScore')/25) * 100}`) + "%" ;
    document.getElementById('progressBarTwoLearnFull').style.width = levelTwoLearnPercentage + "%";
    levelOneLearnScore = localStorage.getItem('levelOneLearnScore');
    if (levelOneLearnPercentage != 100) {
        document.levelOneQuizButton.action = "javascript:void(0)";
    } else {
        document.levelOneQuizButton.action = "/ressources/levelOneQuiz/levelOneQuiz.html";
    }
    levelTwoQuizScore = localStorage.getItem('levelTwoQuizScore');
    if (levelTwoLearnPercentage != 100) {
        document.levelTwoQuizButton.action = "javascript:void(0)";
    } else {
        document.levelTwoQuizButton.action = "/ressources/levelTwoQuiz/levelTwoQuiz.html";
    }
    
}

openSettings.onclick = function() {
    normalMenu.style.display = "none";
    settingsContainer.style.display = "block";
}

closeSettings.onclick = function() {
    settingsContainer.style.display = "none";
    normalMenu.style.display = "block";
}

resetScoreButton.onclick = function() {
    window.localStorage.clear();
    location.reload();
}

explainButton.onclick = function() {
    normalMenu.style.display = "none";
    explanation.style.display = "block";
}

backToMenuExplain.onclick = function() {
    normalMenu.style.display = "block";
    explanation.style.display = "none";
}