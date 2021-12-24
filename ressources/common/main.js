var levelTwoLearnBarScore = document.getElementById("levelTwoLearnBar");
var levelTwoLearnPercentage

window.onload = function() {
    levelTwoLearnPercentage = `${(localStorage.getItem('levelTwoLearnScore')/26) * 100}`;
    console.log(levelTwoLearnPercentage);
    document.getElementById("progressBarTwoLearnFull").innerHTML += Math.round(`${(localStorage.getItem('levelTwoLearnScore')/26) * 100}`) + "%" ;
    document.getElementById('progressBarTwoLearnFull').style.width = levelTwoLearnPercentage + "%";
}
