var further = document.getElementById("further");
var koreanPart = document.getElementById("koreanPart");
var imagePart = document.getElementById("germanPart")
var showGerman = document.getElementById("showGerman");
var menu = document.getElementById("menu");
var koreanImage = document.getElementById("koreanImage");
var progressBarFull = document.getElementById("progressBarFull")
var showGermanText = document.getElementById("germanPart");
var germanMeaning = document.getElementById("germanMeaning");
var flagCountry = document.getElementById("flagCountry");
var countryText = document.getElementById("countryText");
var speakingVersion = document.getElementById("speakingVersion");
var koreanPicture;
var step;
const maxCountries = 25;
const score = [];
const scoreOne = [];

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
        nextCountry();
    } else {
        nextCountry();
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
        if (scoreOne.length < 25) {
            nextCountryTwo();
            scoreOne.push("1");
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

function nextCountry() {
    switch (score.length) {
        case 0:
            koreanImage.src = '/ressources/levelTwoLearn/images/australien.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/australien.png';
            speakingVersion.innerHTML = "Australien"
            countryText.innerHTML = "Australien";
            break;
        case 1:
            koreanImage.src = '/ressources/levelTwoLearn/images/china.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/china.png';
            speakingVersion.innerHTML = "jungguk"
            countryText.innerHTML = "China";
            break;
        case 2:
            koreanImage.src = '/ressources/levelTwoLearn/images/deutschland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/deutschland.png';
            speakingVersion.innerHTML = "dogil"
            countryText.innerHTML = "Deutschland";
            break;
        case 3:
            koreanImage.src = '/ressources/levelTwoLearn/images/england.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/england.png';
            speakingVersion.innerHTML = "yeongguk"
            countryText.innerHTML = "England";
            break;
        case 4:
            koreanImage.src = '/ressources/levelTwoLearn/images/frankreich.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/frankreich.png';
            speakingVersion.innerHTML = "peurangseu"
            countryText.innerHTML = "Frankreich";
            break;
        case 5:
            koreanImage.src = '/ressources/levelTwoLearn/images/griechenland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/griechenland.png';
            speakingVersion.innerHTML = "geuriseu"
            countryText.innerHTML = "Griechenland";
            break;
        case 6:
            koreanImage.src = '/ressources/levelTwoLearn/images/holland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/holland.png';
            speakingVersion.innerHTML = "nedeollandeu"
            countryText.innerHTML = "Niederlande";
            break;
        case 7:
            koreanImage.src = '/ressources/levelTwoLearn/images/indien.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/indien.png';
            speakingVersion.innerHTML = "Indo"
            countryText.innerHTML = "Indien";
            break;
        case 8:
            koreanImage.src = '/ressources/levelTwoLearn/images/italien.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/italien.png';
            speakingVersion.innerHTML = "itallia"
            countryText.innerHTML = "Italien";
            break;
        case 9:
            koreanImage.src = '/ressources/levelTwoLearn/images/japan.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/japan.png';
            speakingVersion.innerHTML = "ilbon"
            countryText.innerHTML = "Japan";
            break;
        case 10:
            koreanImage.src = '/ressources/levelTwoLearn/images/kanada.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/kanada.png';
            speakingVersion.innerHTML = "kaenada"
            countryText.innerHTML = "Kanada";
            break;
        case 11:
            koreanImage.src = '/ressources/levelTwoLearn/images/korea.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/korea.png';
            speakingVersion.innerHTML = "hanguk"
            countryText.innerHTML = "Korea";
            break;
        case 12:
            koreanImage.src = '/ressources/levelTwoLearn/images/mongolei.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/mongolei.png';
            speakingVersion.innerHTML = "monggol"
            countryText.innerHTML = "Mongolei";
            break;
        case 13:
            koreanImage.src = '/ressources/levelTwoLearn/images/neuseeland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/neuseeland.png';
            speakingVersion.innerHTML = "nyujillaend"
            countryText.innerHTML = "Neuseeland";
            break;
        case 14:
            koreanImage.src = '/ressources/levelTwoLearn/images/norwegen.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/norwegen.png';
            speakingVersion.innerHTML = "noreuwei"
            countryText.innerHTML = "Norwegen";
            break;
        case 15:
            koreanImage.src = '/ressources/levelTwoLearn/images/österreich.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/österreich.png';
            speakingVersion.innerHTML = "oseuteuria"
            countryText.innerHTML = "Österreich";
            break;
        case 16:
            koreanImage.src = '/ressources/levelTwoLearn/images/polen.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/polen.png';
            speakingVersion.innerHTML = "pollandeu"
            countryText.innerHTML = "Polen";
            break;
        case 17:
            koreanImage.src = '/ressources/levelTwoLearn/images/portugal.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/portugal.png';
            speakingVersion.innerHTML = "poreutugal"
            countryText.innerHTML = "Portugal";
            break;
        case 18:
            koreanImage.src = '/ressources/levelTwoLearn/images/russland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/russland.png';
            speakingVersion.innerHTML = "reosia"
            countryText.innerHTML = "Russland";
            break;
        case 19:
            koreanImage.src = '/ressources/levelTwoLearn/images/schweden.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/schweden.png';
            speakingVersion.innerHTML = "seuweden"
            countryText.innerHTML = "Schweden";
            break;
        case 20:
            koreanImage.src = '/ressources/levelTwoLearn/images/schweiz.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/schweiz.png';
            speakingVersion.innerHTML = "seuwiseu"
            countryText.innerHTML = "Schweiz";
            break;
        case 21:
            koreanImage.src = '/ressources/levelTwoLearn/images/spanien.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/spanien.png';
            speakingVersion.innerHTML = "seupein"
            countryText.innerHTML = "Spanien";
            break;
        case 22:
            koreanImage.src = '/ressources/levelTwoLearn/images/türkei.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/türkei.png';
            speakingVersion.innerHTML = "teoki"
            countryText.innerHTML = "Türkei";
            break;
        case 23:
            koreanImage.src = '/ressources/levelTwoLearn/images/ungarn.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/ungarn.png';
            speakingVersion.innerHTML = "heonggari"
            countryText.innerHTML = "Ungarn";
            break;
        case 24:
            koreanImage.src = '/ressources/levelTwoLearn/images/usa.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/usa.png';
            speakingVersion.innerHTML = "miguk"
            countryText.innerHTML = "USA";
            break;
        case 25:
            koreanImage.src = '/ressources/levelTwoLearn/images/vietnam.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/vietnam.png';
            speakingVersion.innerHTML = "beteunam"
            countryText.innerHTML = "Vietnam";
            break;
    }
}

function nextCountryTwo() {
    switch (scoreOne.length) {
        case 0:
            koreanImage.src = '/ressources/levelTwoLearn/images/australien.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/australien.png';
            speakingVersion.innerHTML = "Australien"
            countryText.innerHTML = "Australien";
            break;
        case 1:
            koreanImage.src = '/ressources/levelTwoLearn/images/china.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/china.png';
            speakingVersion.innerHTML = "jungguk"
            countryText.innerHTML = "China";
            break;
        case 2:
            koreanImage.src = '/ressources/levelTwoLearn/images/deutschland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/deutschland.png';
            speakingVersion.innerHTML = "dogil"
            countryText.innerHTML = "Deutschland";
            break;
        case 3:
            koreanImage.src = '/ressources/levelTwoLearn/images/england.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/england.png';
            speakingVersion.innerHTML = "yeongguk"
            countryText.innerHTML = "England";
            break;
        case 4:
            koreanImage.src = '/ressources/levelTwoLearn/images/frankreich.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/frankreich.png';
            speakingVersion.innerHTML = "peurangseu"
            countryText.innerHTML = "Frankreich";
            break;
        case 5:
            koreanImage.src = '/ressources/levelTwoLearn/images/griechenland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/griechenland.png';
            speakingVersion.innerHTML = "geuriseu"
            countryText.innerHTML = "Griechenland";
            break;
        case 6:
            koreanImage.src = '/ressources/levelTwoLearn/images/holland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/holland.png';
            speakingVersion.innerHTML = "nedeollandeu"
            countryText.innerHTML = "Niederlande";
            break;
        case 7:
            koreanImage.src = '/ressources/levelTwoLearn/images/indien.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/indien.png';
            speakingVersion.innerHTML = "Indo"
            countryText.innerHTML = "Indien";
            break;
        case 8:
            koreanImage.src = '/ressources/levelTwoLearn/images/italien.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/italien.png';
            speakingVersion.innerHTML = "itallia"
            countryText.innerHTML = "Italien";
            break;
        case 9:
            koreanImage.src = '/ressources/levelTwoLearn/images/japan.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/japan.png';
            speakingVersion.innerHTML = "ilbon"
            countryText.innerHTML = "Japan";
            break;
        case 10:
            koreanImage.src = '/ressources/levelTwoLearn/images/kanada.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/kanada.png';
            speakingVersion.innerHTML = "kaenada"
            countryText.innerHTML = "Kanada";
            break;
        case 11:
            koreanImage.src = '/ressources/levelTwoLearn/images/korea.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/korea.png';
            speakingVersion.innerHTML = "hanguk"
            countryText.innerHTML = "Korea";
            break;
        case 12:
            koreanImage.src = '/ressources/levelTwoLearn/images/mongolei.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/mongolei.png';
            speakingVersion.innerHTML = "monggol"
            countryText.innerHTML = "Mongolei";
            break;
        case 13:
            koreanImage.src = '/ressources/levelTwoLearn/images/neuseeland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/neuseeland.png';
            speakingVersion.innerHTML = "nyujillaend"
            countryText.innerHTML = "Neuseeland";
            break;
        case 14:
            koreanImage.src = '/ressources/levelTwoLearn/images/norwegen.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/norwegen.png';
            speakingVersion.innerHTML = "noreuwei"
            countryText.innerHTML = "Norwegen";
            break;
        case 15:
            koreanImage.src = '/ressources/levelTwoLearn/images/österreich.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/österreich.png';
            speakingVersion.innerHTML = "oseuteuria"
            countryText.innerHTML = "Österreich";
            break;
        case 16:
            koreanImage.src = '/ressources/levelTwoLearn/images/polen.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/polen.png';
            speakingVersion.innerHTML = "pollandeu"
            countryText.innerHTML = "Polen";
            break;
        case 17:
            koreanImage.src = '/ressources/levelTwoLearn/images/portugal.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/portugal.png';
            speakingVersion.innerHTML = "poreutugal"
            countryText.innerHTML = "Portugal";
            break;
        case 18:
            koreanImage.src = '/ressources/levelTwoLearn/images/russland.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/russland.png';
            speakingVersion.innerHTML = "reosia"
            countryText.innerHTML = "Russland";
            break;
        case 19:
            koreanImage.src = '/ressources/levelTwoLearn/images/schweden.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/schweden.png';
            speakingVersion.innerHTML = "seuweden"
            countryText.innerHTML = "Schweden";
            break;
        case 20:
            koreanImage.src = '/ressources/levelTwoLearn/images/schweiz.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/schweiz.png';
            speakingVersion.innerHTML = "seuwiseu"
            countryText.innerHTML = "Schweiz";
            break;
        case 21:
            koreanImage.src = '/ressources/levelTwoLearn/images/spanien.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/spanien.png';
            speakingVersion.innerHTML = "seupein"
            countryText.innerHTML = "Spanien";
            break;
        case 22:
            koreanImage.src = '/ressources/levelTwoLearn/images/türkei.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/türkei.png';
            speakingVersion.innerHTML = "teoki"
            countryText.innerHTML = "Türkei";
            break;
        case 23:
            koreanImage.src = '/ressources/levelTwoLearn/images/ungarn.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/ungarn.png';
            speakingVersion.innerHTML = "heonggari"
            countryText.innerHTML = "Ungarn";
            break;
        case 24:
            koreanImage.src = '/ressources/levelTwoLearn/images/usa.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/usa.png';
            speakingVersion.innerHTML = "miguk"
            countryText.innerHTML = "USA";
            break;
        case 25:
            koreanImage.src = '/ressources/levelTwoLearn/images/vietnam.png';
            flagCountry.src = '/ressources/levelTwoLearn/images/flags/vietnam.png';
            speakingVersion.innerHTML = "beteunam"
            countryText.innerHTML = "Vietnam";
            break;
        }
    }

