console.log(localStorage.getItem('levelTwoLearnScore'));

window.onload = function() {
    document.getElementById('levelTwoLearnBar').innerHTML += localStorage.getItem('levelTwoLearnScore');
}
