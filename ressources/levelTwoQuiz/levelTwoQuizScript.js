var further = document.getElementById("further");
var countryFlag = document.getElementById("countryFlag");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerOneButton = document.getElementById("answerOneButton");
var answerTwoButton = document.getElementById("answerTwoButton");
var answerThreeButton = document.getElementById("answerThreeButton");
var step;
var randomDelete;
var multiplier = 26;
var shuffle;
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
    console.log(randomNumbers)
}

shuffle = function(){
    return Math.random()-0.5;
};

function questions() {
    switch(getValueOfArray) {
        case 1:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/china.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/china.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/spanien.png";
            break;
        case 2:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/australien.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/japan.png";
            break;
        case 3:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/deutschland.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/indien.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/england.png";
            break;
        case 4:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/england.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/england.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/China.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/usa.png";
            break;
        case 5:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/frankreich.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/schweiz.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/russland.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/frankreich.png";
            break;
        case 6:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/griechenland.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/griechenland.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/holland.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/japan.png";
            break;
        case 7:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/holland.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/griechenland.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/holland.png";
            break;
        case 8:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/indien.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/indien.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/polen.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/korea.png";
            break;
        case 9:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/italien.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/indien.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/italien.png";
            break;
        case 10:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/japan.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/japan.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/neuseeland.png";
            break;
        case 11:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/kanada.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/kanada.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/korea.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/portugal.png";
            break;
        case 12:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/korea.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/griechenland.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/korea.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/china.png";
            break;
        case 13:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/mongolei.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/mongolei.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/norwegen.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/türkei.png";
            break;
        case 14:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/neuseeland.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/neuseeland.png";
            break;
        case 15:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/norwegen.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/usa.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/norwegen.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/japan.png";
            break;
        case 16:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/österreich.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/schweiz.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/spanien.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/österreich.png";
            break;
        case 17:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/polen.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/polen.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/portugal.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/vietnam.png";
            break;
        case 18:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/portugal.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/australien.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/portugal.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/japan.png";
            break;
        case 19:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/russland.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/russland.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/deutschland.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            break;
        case 20:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/schweden.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/schweiz.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/schweden.png";
            break;
        case 21:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/schweiz.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/neuseeland.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/schweiz.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/spanien.png";
            break;
        case 22:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/spanien.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/spanien.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/griechenland.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            break;
        case 23:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/türkei.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/türkei.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/italien.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/england.png";
            break;
        case 24:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/ungarn.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/norwegen.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/usa.png";
            break;
        case 25:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/usa.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/usa.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/ungarn.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/russland.png";
            break;
        case 26:
            countryFlag.src = "/ressources/levelTwoQuiz/images/flags/vietnam.png";
            answerOne.src = "/ressources/levelTwoQuiz/images/frankreich.png";
            answerTwo.src = "/ressources/levelTwoQuiz/images/türkei.png";
            answerThree.src = "/ressources/levelTwoQuiz/images/vietnam.png";
            break;
    }
}

function getValueOfArrayF() {
    getValueOfArray = randomNumbers[donequestions.length];
}

answerOne.onclick = function() {
    check();
}

function check() {
    switch (getValueOfArray - 1) {
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
    getValueOfArrayF();
    donequestions.push("1");
    questions();
}