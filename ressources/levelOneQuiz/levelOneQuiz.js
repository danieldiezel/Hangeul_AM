var germanImage = document.getElementById("germanImage");
var answerOneButton = document.getElementById("answerOneButton");
var answerTwoButton = document.getElementById("answerTwoButton");
var answerThreeButton = document.getElementById("answerThreeButton");
var levelContainer = document.getElementById("levelOneContainer");
var quizStats = document.getElementById("quizStats");
var correctAnswer = document.getElementById("correctAnswers");
var wrongAnswer = document.getElementById("wrongAnswers");
var result = document.getElementById("result");
var furtherButton = document.getElementById("further");
var endButton = document.getElementById("end");
var score = document.getElementById("score");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
const donequestions = [];
const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
var step;
var randomDelete;
var multiplier = 40;
var shuffle;
const scoreCount = [];
var scoreMax = 15;
var getValueOfArray;

window.onload = function() {
    for (var step = 1; step < 26; step++) {
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
    switch(getValueOfArray) {
        case 1:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/1.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet1.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet2.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet3.png';
            break;
        case 2:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/2.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet5.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet2.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet6.png';
            break;
        case 3:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/3.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet3.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet8.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet1.png';
            break;
        case 4:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/4.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet7.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet9.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet4.png';
            break;
        case 5:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/5.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet5.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet2.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet10.png';
            break;
        case 6:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/6.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet8.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet3.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet6.png';
            break;
        case 7:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/7.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet9.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet7.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet2.png';
            break;
        case 8:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/8.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet8.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet10.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet9.png';
            break;
        case 9:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/9.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet8.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet9.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet5.png';
            break;
        case 10:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/vowals/vocal/10.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet4.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet10.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/vowals/Alphabet7.png';
            break;
        case 11:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/11.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet11.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet12.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet13.png';
            break;  
        case 12:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/12.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet13.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet12.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15.png';
            break;
        case 13:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/13.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet16.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet13.png';
            break; 
        case 14:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/14.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet14.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet16.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet18.png';
            break;  
        case 15:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/15.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet12.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet19.png';
            break;
        case 16:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/16.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet23.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet16.png';
            break; 
        case 17:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/17.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet18.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet17.png';
            break;  
        case 18:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/18.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet18.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet21.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet12.png';
            break;
        case 19:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/19.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet20.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet22.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet19.png';
            break;
        case 20:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/20.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet20.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet18.png';
            break;  
        case 21:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/21.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet17.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet14.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet21.png';
            break;
        case 22:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/22.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet22.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet21.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24.png';
            break;
        case 23:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/23.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet23.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet22.png';
            break;  
        case 24:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/24.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet17.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24.png';
            break;
        case 25:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/25.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet25.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet26.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet27.png';
            break;  
        case 26:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/26.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet25.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet26.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet27.png';
            break;  
        case 27:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/27.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet25.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet26.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet27.png';
            break;
        case 28:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/28.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet30.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet28.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet34.png';
            break;  
        case 29:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/29.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet29.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet26.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet31.png';
            break;  
        case 30:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/30.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet31.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet30.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet33.png';
            break;
        case 31:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/31.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet33.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet35.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet31.png';
            break;  
        case 32:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/32.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet30.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet26.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet32.png';
            break;  
        case 33:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/33.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet30.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet31.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet33.png';
            break;
        case 34:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/34.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet35.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet34.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet31.png';
            break;  
        case 35:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/german/35.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet34.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet30.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/compoundVowels/Alphabet35.png';
            break;
        case 36:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/german/36.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet40.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet36.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet39.png';
            break;
        case 37:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/german/37.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet38.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet36.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet37.png';
            break;
        case 38:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/german/38.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet37.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet36.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet38.png';
            break;
        case 39:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/german/39.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet36.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet38.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet39.png';
            break;
        case 40:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/german/40.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet40.png';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet36.png';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet39.png';
            break;
        }
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
        if (getValueOfArray == 1 || getValueOfArray == 3 || getValueOfArray == 5 || getValueOfArray == 8 || getValueOfArray == 11 || getValueOfArray == 14 || getValueOfArray == 18 || getValueOfArray == 20 || getValueOfArray == 22 || getValueOfArray == 23 || getValueOfArray == 25 || getValueOfArray == 29 || getValueOfArray == 40) {
            scoreCount.push("1");
        }
    }
    if (whichButton == 2) {
        if (getValueOfArray == 2 || getValueOfArray == 7 || getValueOfArray == 9 || getValueOfArray == 10 || getValueOfArray == 12 || getValueOfArray == 15 || getValueOfArray == 26  || getValueOfArray == 28 || getValueOfArray == 30 || getValueOfArray == 34 || getValueOfArray == 36) {
            scoreCount.push("1");
        }
    }
    if (whichButton == 3) {
        if (getValueOfArray == 4 || getValueOfArray == 6 || getValueOfArray == 13 || getValueOfArray == 16 || getValueOfArray == 17 || getValueOfArray == 19 || getValueOfArray == 21 || getValueOfArray == 24 || getValueOfArray == 27 || getValueOfArray == 31 || getValueOfArray == 32 || getValueOfArray == 33 || getValueOfArray == 35 || getValueOfArray == 37 || getValueOfArray == 38 || getValueOfArray == 39) {
            scoreCount.push("1");
        }
    }
    
}

function check() {
    switch (getValueOfArray) {
        case 1: 
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 2: 
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 3:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 4:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 5:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 6:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 7:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 8:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 9:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 10:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 11:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 12:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 13:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 14:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 15:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 16:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 17:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 18:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 19:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 20:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 21:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 22:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 23:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 24:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 25:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 26:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 27:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 28:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 29:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 30:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 31:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 32:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 33:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 34:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 35:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 36:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid green';
            answerThreeButton.style.border = '4px solid red';
            break;
        case 37:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 38:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 39:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid red';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid green';
            break;
        case 40:
            answerOne.style.backgroundColor = 'yellow';
            answerTwo.style.backgroundColor = 'yellow';
            answerThree.style.backgroundColor = 'yellow';
            answerOneButton.style.border = '4px solid green';
            answerTwoButton.style.border = '4px solid red';
            answerThreeButton.style.border = '4px solid red';
            break;
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
    levelContainer.style.display = "none";
    correctAnswer.innerHTML = "Richtige Antworten: " + scoreCount.length;
    wrongAnswer.innerHTML = "Falsche Antworten: " + (15 - scoreCount.length);
    if (scoreCount.length > 11) {
        result.innerHTML = "Level 3 wurde freigeschaltet!";
        result.style.color = 'green';
    } else {
        result.innerHTML = "Versuchen Sie es noch einmal!"
        result.style.color = 'red';
    }
    quizStats.style.display = "flex";
    if(localStorage.getItem('levelOneQuizScore') > 11){
    localStorage.setItem('levelOneQuizScore', scoreCount.length);
    }
}