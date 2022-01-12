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
            answerOneButton.src = '/ressources/levelOneQuiz/images/korean/doubleConsonants/Alphabet46.png';
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