var germanImage = document.getElementById("germanImage");
var answerOneButton = document.getElementById("answerOneButton");
var answerTwoButton = document.getElementById("answerTwoButton");
var answerThreeButton = document.getElementById("answerThreeButton");
var levelContainer = document.getElementById("levelOneContainer");
var quizStats = document.getElementById("quizStats");
var correctAnswerStats = document.getElementById("correctAnswers");
var wrongAnswerStats = document.getElementById("wrongAnswers");
var result = document.getElementById("result");
var furtherButton = document.getElementById("further");
var endButton = document.getElementById("end");
var score = document.getElementById("score");
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
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet11';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet12';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet13';
            break;  
        case 12:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/12.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet13';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet12';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15';
            break;
        case 13:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/13.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet16';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet13';
            break; 
        case 14:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/14.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet14';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet16';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet18';
            break;  
        case 15:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/15.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet12';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet19';
            break;
        case 16:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/16.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet23';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet16';
            break; 
        case 17:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/17.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet18';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet17';
            break;  
        case 18:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/18.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet18';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet21';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet12';
            break;
        case 19:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/19.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet20';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet22';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet19';
            break;
        case 20:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/20.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet20';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet18';
            break;  
        case 21:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/21.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet17';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet14';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet21';
            break;
        case 22:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/22.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet22';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet21';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24';
            break;
        case 23:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/23.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet23';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet22';
            break;  
        case 24:
            germanImage.src = '/ressources/levelOneQuiz/images/korean/consonants/german/24.png';
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet17';
            answerTwoButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet15';
            answerThreeButton.src = '/ressources/levelOneQuiz/images/korean/consonants/Alphabet24';
            break;
    }
}