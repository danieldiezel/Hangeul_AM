var levelTwoLearnBarScore = document.getElementById("levelTwoLearnBar");
var levelTwoLearnPercentage
var levelTwoQuizScore;

window.onload = function() {
    levelTwoLearnPercentage = `${(localStorage.getItem('levelTwoLearnScore')/25) * 100}`;
    document.getElementById("progressBarTwoLearnFull").innerHTML += Math.round(`${(localStorage.getItem('levelTwoLearnScore')/25) * 100}`) + "%" ;
    document.getElementById('progressBarTwoLearnFull').style.width = levelTwoLearnPercentage + "%";
    levelTwoQuizScore = localStorage.getItem('levelTwoQuizScore');
}
