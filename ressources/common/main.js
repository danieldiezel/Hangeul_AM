var levelTwoLearnBarScore = document.getElementById("levelTwoLearnBar");
var levelTwoLearnPercentage
var levelTwoQuizScore;
var openSettings = document.getElementById("settingsButton");
var closeSettings = document.getElementById("closeSettingsButton");
var settingsContainer = document.getElementById("settingsContainer");
var normalMenu = document.getElementById("menuContainer");
var resetScoreButton = document.getElementById("resetScoreButton");

window.onload = function() {
    levelTwoLearnPercentage = `${(localStorage.getItem('levelTwoLearnScore')/25) * 100}`;
    document.getElementById("progressBarTwoLearnFull").innerHTML += Math.round(`${(localStorage.getItem('levelTwoLearnScore')/25) * 100}`) + "%" ;
    document.getElementById('progressBarTwoLearnFull').style.width = levelTwoLearnPercentage + "%";
    levelTwoQuizScore = localStorage.getItem('levelTwoQuizScore');
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