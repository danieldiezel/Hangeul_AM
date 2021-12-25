var further = document.getElementById("further");
var countryFlag = document.getElementById("countryFlag");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerOneButton = document.getElementById("answerOneButton");
var answerTwoButton = document.getElementById("answerTwoButton");
var answerThreeButton = document.getElementById("answerThreeButton");
var quizStats = document.getElementById("quizStats");
var end = document.getElementById("end");
var levelTwoContainer = document.getElementById("levelTwoContainer");
var score = document.getElementById("score");
var totalAnswer = document.getElementById("totalAnswers");
var wrongAnswer = document.getElementById("wrongAnswers");
var correctAnswer = document.getElementById("correctAnswers")
var result = document.getElementById("result");
var step;
var randomDelete;
var multiplier = 26;
var shuffle;
const scoreCount = [];
var scoreMax = 15;
var getValueOfArray;
const donequestions = [];
const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

window.onload = function() {
    for (var step = 1; step < 12; step++) {
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

shuffle = function(){
    return Math.random()-0.5;
};

function questions() {
    switch(getValueOfArray) {
        case 1:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/china.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/china.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/spanien.png";
            break;
        case 2:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/australien.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/japan.png";
            break;
        case 3:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/deutschland.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/indien.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/england.png";
            break;
        case 4:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/england.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/england.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/China.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/usa.png";
            break;
        case 5:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/frankreich.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/schweiz.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/russland.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/frankreich.png";
            break;
        case 6:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/griechenland.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/griechenland.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/holland.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/japan.png";
            break;
        case 7:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/holland.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/griechenland.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/holland.png";
            break;
        case 8:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/indien.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/indien.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/polen.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/korea.png";
            break;
        case 9:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/italien.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/indien.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/italien.png";
            break;
        case 10:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/japan.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/japan.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/neuseeland.png";
            break;
        case 11:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/kanada.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/kanada.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/korea.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/portugal.png";
            break;
        case 12:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/korea.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/griechenland.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/korea.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/china.png";
            break;
        case 13:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/mongolei.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/mongolei.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/norwegen.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/türkei.png";
            break;
        case 14:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/neuseeland.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/neuseeland.png";
            break;
        case 15:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/norwegen.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/usa.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/norwegen.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/japan.png";
            break;
        case 16:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/österreich.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/schweiz.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/spanien.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/österreich.png";
            break;
        case 17:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/polen.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/polen.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/portugal.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/vietnam.png";
            break;
        case 18:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/portugal.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/portugal.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/japan.png";
            break;
        case 19:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/russland.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/russland.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            break;
        case 20:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/schweden.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/schweiz.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/schweden.png";
            break;
        case 21:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/schweiz.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/neuseeland.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/schweiz.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/spanien.png";
            break;
        case 22:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/spanien.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/spanien.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/griechenland.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            break;
        case 23:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/türkei.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/türkei.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/italien.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/england.png";
            break;
        case 24:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/ungarn.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/norwegen.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/usa.png";
            break;
        case 25:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/usa.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/usa.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/russland.png";
            break;
        case 26:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/vietnam.png";
            answerOneButton.src = "/ressources/levelTwoQuiz/images/frankreich.png";
            answerTwoButton.src = "/ressources/levelTwoQuiz/images/türkei.png";
            answerThreeButton.src = "/ressources/levelTwoQuiz/images/vietnam.png";
            break;
    }
}

function getValueOfArrayF() {
    getValueOfArray = randomNumbers[donequestions.length];
}

answerOne.onclick = function() {
    check();
    further.disabled = false;
    answerOne.disabled = true;
    answerTwo.disabled = true;
    answerThree.disabled = true;
    points(1);
    score.innerHTML = scoreCount.length + "/ 15 current score";
}

answerTwo.onclick = function() {
    check();
    further.disabled = false;
    answerOne.disabled = true;
    answerTwo.disabled = true;
    answerThree.disabled = true;
    points(2);
    score.innerHTML = scoreCount.length + "/ 15 current score";
}

answerThree.onclick = function() {
    check();
    further.disabled = false;
    answerOne.disabled = true;
    answerTwo.disabled = true;
    answerThree.disabled = true;
    points(3);
    score.innerHTML = scoreCount.length + "/ 15 current score";
}

function points(whichButton) {
    if (whichButton == 1) {
        if (getValueOfArray == 2 || getValueOfArray == 4 ||getValueOfArray == 6 || getValueOfArray == 8 || getValueOfArray == 11 || getValueOfArray == 13 || getValueOfArray == 17 || getValueOfArray == 19 || getValueOfArray == 22 || getValueOfArray == 23 || getValueOfArray == 25) {
            scoreCount.push("1");
        }
    }
    if (whichButton == 2) {
        if (getValueOfArray == 1 || getValueOfArray == 3 || getValueOfArray == 10 || getValueOfArray == 12 || getValueOfArray == 15 || getValueOfArray == 18 || getValueOfArray == 21  || getValueOfArray == 24) {
            scoreCount.push("1");
        }
    }
    if (whichButton == 3) {
        if (getValueOfArray == 5 || getValueOfArray == 7 || getValueOfArray == 9 || getValueOfArray == 14 || getValueOfArray == 16 || getValueOfArray == 20 || getValueOfArray == 26) {
            scoreCount.push("1");
        }
    }
    
}

function check() {
    switch (getValueOfArray) {
        case 1: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid yellow';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 2: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 3: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid yellow';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 4: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 5: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid yellow';
            break;
        }
        case 6: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 7: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid yellow';
            break;
        }
        case 8: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 9: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid yellow';
            break;
        }
        case 10: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid yellow';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 11: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 12: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid yellow';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 13: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 14: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid yellow';
            break;
        }
        case 15: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid yellow';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 16: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid yellow';
            break;
        }
        case 17: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 18: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid yellow';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 19: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 20: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid yellow';
            break;
        }
        case 21: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid yellow';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 22: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 23: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 24: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid yellow';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 25: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid yellow';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        }
        case 26: {
            answerOne.style.backgroundColor = 'green';
            answerTwo.style.backgroundColor = 'green';
            answerThree.style.backgroundColor = 'green';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid yellow';
            break;
        }
    }
}

further.onclick = function() {
    if(donequestions.length != 14) {
    getValueOfArrayF();
    donequestions.push("1");
    questions();
    answerOne.style.backgroundColor = 'white';
    answerTwo.style.backgroundColor = 'white';
    answerThree.style.backgroundColor = 'white';
    answerOneButton.style.border = '';
    answerTwoButton.style.border = '';
    answerThreeButton.style.border = '';
    further.disabled = true;
    answerOne.disabled = false;
    answerTwo.disabled = false;
    answerThree.disabled = false;
    } else {
        getValueOfArrayF();
        donequestions.push("1");
        questions();
        answerOne.style.backgroundColor = 'white';
        answerTwo.style.backgroundColor = 'white';
        answerThree.style.backgroundColor = 'white';
        answerOneButton.style.border = '';
        answerTwoButton.style.border = '';
        answerThreeButton.style.border = '';
        further.disabled = true;
        answerOne.disabled = false;
        answerTwo.disabled = false;
        answerThree.disabled = false;
        further.style.display = "none";
        end.style.display = "block";
    }
}

end.onclick = function() {
    levelTwoContainer.style.display = "none";
    correctAnswer.innerHTML = "Richtige Antworten: " + scoreCount.length;
    wrongAnswer.innerHTML = "Falsche Antworten: " + (15 - scoreCount.length);
    if (scoreCount.length > 11) {
        result.innerHTML = "Level 2 wurde freigeschaltet!";
        result.style.color = 'green';
    } else {
        result.innerHTML = "Versuchen Sie es noch einmal!"
        result.style.color = 'red';
    }
    quizStats.style.display = "block";

}