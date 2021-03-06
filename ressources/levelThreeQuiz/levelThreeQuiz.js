var levelContainer = document.getElementById("levelThreeContainer");
var questionImage = document.getElementById("germanImage");
var infoText = document.getElementById("infoText");
var answerOneImage = document.getElementById("answerOneButton");
var answerTwoImage = document.getElementById("answerTwoButton");
var answerThreeImage = document.getElementById("answerThreeButton");
var answerOneButton = document.getElementById("answerOne");
var answerTwoButton = document.getElementById("answerTwo");
var answerThreeButton = document.getElementById("answerThree");
var score = document.getElementById("score");
var further = document.getElementById("further");
var end = document.getElementById("end");
var quizStats = document.getElementById("quizStats");
var correctAnswers = document.getElementById("correctAnswers");
var wrongAnswers = document.getElementById("wrongAnswers");
var totalAnswers = document.getElementById("totalAnswers");
var result = document.getElementById("result");
var step;
var randomDelete;
var multiplier = 20;
var shuffle;
const scoreCount = [];
var scoreMax = 15;
var getValueOfArray;
const donequestions = [];
const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

window.onload = function(){
    for (var step = 1; step < 6; step++) {
        randomDelete = Math.round(Math.random() * multiplier);
        randomNumbers.splice(randomDelete, 1);
        multiplier = multiplier - 1;
    }
    randomNumbers.sort(shuffle);
    getValueOfArrayF();
    questions();
    donequestions.push("1");
    further.disabled = true;
    score.innerHTML = 0  + "/ 15 current score";
}

function getValueOfArrayF() {
    getValueOfArray = randomNumbers[donequestions.length];
}

function questions() {
    switch (getValueOfArray) {
        case 1:
            questionImage.src = "/ressources/levelThreeQuiz/images/adidaseu.png";
            infoText.innerHTML = "adidasseu";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/adidaseu.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/audi.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            break;
        case 2:
            questionImage.src = "/ressources/levelThreeQuiz/images/audi.png";
            infoText.innerHTML = "audi";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/adidaseu.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/audi.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            break;
        case 3:
            questionImage.src = "/ressources/levelThreeQuiz/images/bakjaeyeong.png";
            infoText.innerHTML = "bakjaeyeong";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/bakjimin.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/audi.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/bakjaeyeong.png";
            break;
        case 4:
            questionImage.src = "/ressources/levelThreeQuiz/images/gujji.png";
            infoText.innerHTML = "gujji";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/gujji.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/lisa.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/naiki.png";
            break;
        case 5:
            questionImage.src = "/ressources/levelThreeQuiz/images/hyeondae.png";
            infoText.innerHTML = "hyeondae";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/kimjisu.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/hyeondae.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            break;
        case 6:
            questionImage.src = "/ressources/levelThreeQuiz/images/inseutageuraem.png";
            infoText.innerHTML = "inseutageuraem";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/samseong.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/audi.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/inseutageuraem.png";
            break;
        case 7:
            questionImage.src = "/ressources/levelThreeQuiz/images/jeonghoseok.png";
            infoText.innerHTML = "jeonghoseok";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/jeonghoseok.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/jeonjeongkuk.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            break;
        case 8:
            questionImage.src = "/ressources/levelThreeQuiz/images/jeonjeongkuk.png";
            infoText.innerHTML = "jeonjeongkuk";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/jeonghoseok.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/jeonjeongkuk.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/inseutageuraem.png";
            break;
        case 9:
            questionImage.src = "/ressources/levelThreeQuiz/images/kimjeni.png";
            infoText.innerHTML = "kimjeni";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/kimjisu.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimnamjun.png";
            break;
        case 10:
            questionImage.src = "/ressources/levelThreeQuiz/images/kimjisu.png";
            infoText.innerHTML = "kimjisu";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/audi.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimjisu.png";
            break;
        case 11:
            questionImage.src = "/ressources/levelThreeQuiz/images/kimnamjun.png";
            infoText.innerHTML = "kimnamjun";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/kimnamjun.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/kimjisu.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            break;
        case 12:
            questionImage.src = "/ressources/levelThreeQuiz/images/kimseokjin.png";
            infoText.innerHTML = "kimseokjin";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/adidaseu.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/kimseokjin.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            break;
        case 13:
            questionImage.src = "/ressources/levelThreeQuiz/images/kimtaehyeong.png";
            infoText.innerHTML = "kimtaehyeong";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/samseong.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/kimtaehyeong.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            break;
        case 14:
            questionImage.src = "/ressources/levelThreeQuiz/images/lisa.png";
            infoText.innerHTML = "lisa";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/lisa.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/audi.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/naiki.png";
            break;
        case 15:
            questionImage.src = "/ressources/levelThreeQuiz/images/minyungi.png";
            infoText.innerHTML = "minyungi";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/minyungi.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/lisa.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/kimjeni.png";
            break;
        case 16:
            questionImage.src = "/ressources/levelThreeQuiz/images/munjaein.png";
            infoText.innerHTML = "munjaein";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/adidaseu.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/minyungi.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/munjaein.png";
            break;
        case 17:
            questionImage.src = "/ressources/levelThreeQuiz/images/naiki.png";
            infoText.innerHTML = "naiki";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/lisa.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/teuwiteo.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/naiki.png";
            break;
        case 18:
            questionImage.src = "/ressources/levelThreeQuiz/images/samseong.png";
            infoText.innerHTML = "samseong";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/samseong.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/audi.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/teuwiteo.png";
            break;
        case 19:
            questionImage.src = "/ressources/levelThreeQuiz/images/teuwiteo.png";
            infoText.innerHTML = "teuwiteo";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/naiki.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/samseong.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/teuwiteo.png";
            break;
        case 20:
            questionImage.src = "/ressources/levelThreeQuiz/images/bakjimin.png";
            infoText.innerHTML = "bakjimin";
            answerOneImage.src = "/ressources/levelThreeQuiz/images/answers/adidaseu.png";
            answerTwoImage.src = "/ressources/levelThreeQuiz/images/answers/bakjimin.png";
            answerThreeImage.src = "/ressources/levelThreeQuiz/images/answers/gujji.png";
            break;
    }
}

answerOneButton.onclick = function() {
    check();
    further.disabled = false;
    answerOneButton.disabled = true;
    answerTwoButton.disabled = true;
    answerThreeButton.disabled = true;
    points(1);
    score.innerHTML = scoreCount.length + "/ 15 current score";
}

answerTwoButton.onclick = function() {
    check();
    further.disabled = false;
    answerOneButton.disabled = true;
    answerTwoButton.disabled = true;
    answerThreeButton.disabled = true;
    points(2);
    score.innerHTML = scoreCount.length + "/ 15 current score";
}

answerThreeButton.onclick = function() {
    check();
    further.disabled = false;
    answerOneButton.disabled = true;
    answerTwoButton.disabled = true;
    answerThreeButton.disabled = true;
    points(3);
    score.innerHTML = scoreCount.length + "/ 15 current score";
}

function points(whichButton) {
    if (whichButton == 1) {
        if (getValueOfArray == 1 || getValueOfArray == 4 ||getValueOfArray == 7 || getValueOfArray == 9 || getValueOfArray == 11 || getValueOfArray == 14 || getValueOfArray == 15 || getValueOfArray == 18) {
            scoreCount.push("1");
        }
    }
    if (whichButton == 2) {
        if (getValueOfArray == 2 || getValueOfArray == 5 || getValueOfArray == 8 || getValueOfArray == 12 || getValueOfArray == 13 || getValueOfArray == 20) {
            scoreCount.push("1");
        }
    }
    if (whichButton == 3) {
        if (getValueOfArray == 3 || getValueOfArray == 6 || getValueOfArray == 10 || getValueOfArray == 16 || getValueOfArray == 17 || getValueOfArray == 19) {
            scoreCount.push("1");
        }
    }
    
}

function check() {
    switch (getValueOfArray) {
        case 1:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid green";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 2:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid green";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 3:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid green";
            break;
        case 4:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid green";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 5:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid green";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 6:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid green";
            break;
        case 7:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid green";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 8:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid green";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 9:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid green";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 10:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid green";
            break;
        case 11:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid green";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 12:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid green";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 13:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid green";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 14:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid green";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 15:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid green";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 16:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid green";
            break;
        case 17:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid green";
            break;
        case 18:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid green";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
        case 19:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid rgb(109, 4, 4)";
            answerThreeImage.style.border = "4px solid green";
            break;
        case 20:
            answerOneButton.style.backgroundColor = "red";
            answerTwoButton.style.backgroundColor = "red";
            answerThreeButton.style.backgroundColor = "red";
            answerOneImage.style.border = "4px solid rgb(109, 4, 4)";
            answerTwoImage.style.border = "4px solid green";
            answerThreeImage.style.border = "4px solid rgb(109, 4, 4)";
            break;
    }
}

further.onclick = function() {
    if(donequestions.length != 14) {
    getValueOfArrayF();
    donequestions.push("1");
    questions();
    answerOneButton.style.backgroundColor = 'white';
    answerTwoButton.style.backgroundColor = 'white';
    answerThreeButton.style.backgroundColor = 'white';
    answerOneImage.style.border = '';
    answerTwoImage.style.border = '';
    answerThreeImage.style.border = '';
    further.disabled = true;
    answerOneButton.disabled = false;
    answerTwoButton.disabled = false;
    answerThreeButton.disabled = false;
    } else {
        getValueOfArrayF();
        donequestions.push("1");
        questions();
        answerOneButton.style.backgroundColor = 'white';
        answerTwoButton.style.backgroundColor = 'white';
        answerThreeButton.style.backgroundColor = 'white';
        answerOneImage.style.border = '';
        answerTwoImage.style.border = '';
        answerThreeImage.style.border = '';
        further.disabled = true;
        answerOne.disabled = false;
        answerTwo.disabled = false;
        answerThree.disabled = false;
        further.style.display = "none";
        end.style.display = "block";
    }
}

end.onclick = function() {
    levelContainer.style.display = "none";
    correctAnswers.innerHTML = "Richtige Antworten: " + scoreCount.length;
    wrongAnswers.innerHTML = "Falsche Antworten: " + (15 - scoreCount.length);
    if (scoreCount.length > 11) {
        result.innerHTML = "Anf??nger App durchgespielt! Fortgeschrittenen App folgt!";
        result.style.color = 'green';
    } else {
        result.innerHTML = "Versuchen Sie es noch einmal!"
        result.style.color = 'red';
    }
    quizStats.style.display = "block";
    if(localStorage.getItem('levelTwoQuizScore') > 11){
    localStorage.setItem('levelTwoQuizScore', scoreCount.length);
    }
}