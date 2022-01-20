var levelOneContainer = document.getElementById("levelOneContainer");
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
    console.log(randomNumbers)
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