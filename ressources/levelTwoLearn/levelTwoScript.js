var further = document.getElementById("further");
var koreanPart = document.getElementById("koreanPart");
var imagePart = document.getElementById("germanPart")
var showGerman = document.getElementById("showGerman");
var menu = document.getElementById("menu");
var koreanImage = document.getElementById("koreanImage");
var progressBarFull = document.getElementById("progressBarFull")
var showGermanText = document.getElementById("germanPart");
var germanMeaning = document.getElementById("germanMeaning");
var koreanPicture;
var step;
const maxCountries = 25;
const score = [];
const scoreOne = [];

// TODO wenn spiel schon gespielt progress bar hinstellen uaf den score
window.onload = function() {
    further.style.display = "none";
    germanMeaning.style.display = "none";
    if (localStorage.getItem('levelTwoLearnScore') != null) {
        score.push(localStorage.getItem('levelTwoLearnScore'));
        alreadyDone = score[0];
        for (var step = 1; step < alreadyDone; step++) {
            score.push("1");
        }
        progressBar();
    }   
}

showGerman.onclick = function() {
    further.style.display = "block";
    showGermanText.style.display = "none";
    germanMeaning.style.display = "block";
}

further.onclick = function() {
    further.style.display = "none";
    germanMeaning.style.display = "none";
    if (score.length < 25) {
        score.push("1");
        localStorage.setItem('levelTwoLearnScore', score.length);
        showGermanText.style.display = "block";
        nextCountry();
        progressBar();
    } else {
        // TODO meldung einbauen das man das Quiz freigeschaltet hat.
        if (scoreOne.length < 25) {
            scoreOne.push("1");
            nextCountryTwo();
            showGermanText.style.display = "block";
        } else {
            scoreOne.length = 0;
            nextCountryTwo();
            showGermanText.style.display = "block";
        }
    }    
}

function progressBar() {
    document.getElementById("progressBarFull").style.width = `${(score.length/maxCountries) * 100}%`;
}

//TODO german text
function nextCountry() {
    switch (score.length) {
        case 0:
            koreanImage.src = '/ressources/levelTwoLearn/images/australien.png';
            break;
        case 1:
            koreanImage.src = '/ressources/levelTwoLearn/images/china.png';
            break;
        case 2:
            koreanImage.src = '/ressources/levelTwoLearn/images/deutschland.png';
            break;
        case 3:
            koreanImage.src = '/ressources/levelTwoLearn/images/england.png';
            break;
        case 4:
            koreanImage.src = '/ressources/levelTwoLearn/images/frankreich.png';
            break;
        case 5:
            koreanImage.src = '/ressources/levelTwoLearn/images/griechenland.png';
            break;
        case 6:
            koreanImage.src = '/ressources/levelTwoLearn/images/holland.png';
            break;
        case 7:
            koreanImage.src = '/ressources/levelTwoLearn/images/indien.png';
            break;
        case 8:
            koreanImage.src = '/ressources/levelTwoLearn/images/italien.png';
            break;
        case 9:
            koreanImage.src = '/ressources/levelTwoLearn/images/japan.png';
            break;
        case 10:
            koreanImage.src = '/ressources/levelTwoLearn/images/kanada.png';
            break;
        case 11:
            koreanImage.src = '/ressources/levelTwoLearn/images/korea.png';
            break;
        case 12:
            koreanImage.src = '/ressources/levelTwoLearn/images/mongolei.png';
            break;
        case 13:
            koreanImage.src = '/ressources/levelTwoLearn/images/neuseeland.png';
            break;
        case 14:
            koreanImage.src = '/ressources/levelTwoLearn/images/norwegen.png';
            break;
        case 15:
            koreanImage.src = '/ressources/levelTwoLearn/images/österreich.png';
            break;
        case 16:
            koreanImage.src = '/ressources/levelTwoLearn/images/polen.png';
            break;
        case 17:
            koreanImage.src = '/ressources/levelTwoLearn/images/portugal.png';
            break;
        case 18:
            koreanImage.src = '/ressources/levelTwoLearn/images/russland.png';
            break;
        case 19:
            koreanImage.src = '/ressources/levelTwoLearn/images/schweden.png';
            break;
        case 20:
            koreanImage.src = '/ressources/levelTwoLearn/images/schweiz.png';
            break;
        case 21:
            koreanImage.src = '/ressources/levelTwoLearn/images/spanien.png';
            break;
        case 22:
            koreanImage.src = '/ressources/levelTwoLearn/images/türkei.png';
            break;
        case 23:
            koreanImage.src = '/ressources/levelTwoLearn/images/ungarn.png';
            break;
        case 24:
            koreanImage.src = '/ressources/levelTwoLearn/images/usa.png';
            break;
        case 25:
            koreanImage.src = '/ressources/levelTwoLearn/images/vietnam.png';
            break;
    }
}

function nextCountryTwo() {
    switch (scoreOne.length) {
        case 0:
            koreanImage.src = '/ressources/levelTwoLearn/images/australien.png';
            break;
        case 1:
            koreanImage.src = '/ressources/levelTwoLearn/images/china.png';
            break;
        case 2:
            koreanImage.src = '/ressources/levelTwoLearn/images/deutschland.png';
            break;
        case 3:
            koreanImage.src = '/ressources/levelTwoLearn/images/england.png';
            break;
        case 4:
            koreanImage.src = '/ressources/levelTwoLearn/images/frankreich.png';
            break;
        case 5:
            koreanImage.src = '/ressources/levelTwoLearn/images/griechenland.png';
            break;
        case 6:
            koreanImage.src = '/ressources/levelTwoLearn/images/holland.png';
            break;
        case 7:
            koreanImage.src = '/ressources/levelTwoLearn/images/indien.png';
            break;
        case 8:
            koreanImage.src = '/ressources/levelTwoLearn/images/italien.png';
            break;
        case 9:
            koreanImage.src = '/ressources/levelTwoLearn/images/japan.png';
            break;
        case 10:
            koreanImage.src = '/ressources/levelTwoLearn/images/kanada.png';
            break;
        case 11:
            koreanImage.src = '/ressources/levelTwoLearn/images/korea.png';
            break;
        case 12:
            koreanImage.src = '/ressources/levelTwoLearn/images/mongolei.png';
            break;
        case 13:
            koreanImage.src = '/ressources/levelTwoLearn/images/neuseeland.png';
            break;
        case 14:
            koreanImage.src = '/ressources/levelTwoLearn/images/norwegen.png';
            break;
        case 15:
            koreanImage.src = '/ressources/levelTwoLearn/images/österreich.png';
            break;
        case 16:
            koreanImage.src = '/ressources/levelTwoLearn/images/polen.png';
            break;
        case 17:
            koreanImage.src = '/ressources/levelTwoLearn/images/portugal.png';
            break;
        case 18:
            koreanImage.src = '/ressources/levelTwoLearn/images/russland.png';
            break;
        case 19:
            koreanImage.src = '/ressources/levelTwoLearn/images/schweden.png';
            break;
        case 20:
            koreanImage.src = '/ressources/levelTwoLearn/images/schweiz.png';
            break;
        case 21:
            koreanImage.src = '/ressources/levelTwoLearn/images/spanien.png';
            break;
        case 22:
            koreanImage.src = '/ressources/levelTwoLearn/images/türkei.png';
            break;
        case 23:
            koreanImage.src = '/ressources/levelTwoLearn/images/ungarn.png';
            break;
        case 24:
            koreanImage.src = '/ressources/levelTwoLearn/images/usa.png';
            break;
        case 25:
            koreanImage.src = '/ressources/levelTwoLearn/images/vietnam.png';
            break;
        }
    }

