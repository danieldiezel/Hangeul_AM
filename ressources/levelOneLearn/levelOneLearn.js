var further = document.getElementById("further");
var clickForGerman = document.getElementById("germanPart");
var showGerman = document.getElementById("showGerman");
var germanMeaning = document.getElementById("germanMeaning");
var germanImage = document.getElementById("germanImage");
var soundButton = document.getElementById("soundButton");
var koreanImage = document.getElementById("koreanImage");
var showGermanOne = document.getElementById("showGermanOne");
var audioEins = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s1.mp3");
var audioZwei = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s2.mp3");
var audioDrei = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s3.mp3");
var audioVier = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s4.mp3");
var audioFuenf = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s5.mp3");
var audioSechs = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s6.mp3");
var audioSieben = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s7.mp3");
var audioAcht = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s8.mp3");
var audioNeun = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s9.mp3");
var audioZehn = new Audio("/ressources/levelOneLearn/images/korean/vowals/oral/s10.mp3");
var audioElf = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s11.mp3");
var audioZwoelf = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s12.mp3");
var audioDreizehn = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s13.mp3");
var audioVierzehn = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s14.mp3");
var audioFuenfzehn = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s15.mp3");
var audioSechzehn = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s16.mp3");
var audioSiebtzehn = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s17.mp3");
var audioAchtzehn = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s18.mp3");
var audioNeunzehn = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s19.mp3");
var audioZwanzig = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s20.mp3");
var audioEinundzwanzig = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s21.mp3");
var audioZweiundzwanzig = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s22.mp3");
var audioDreiundzwanzig = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s23.mp3");
var audioVierundzwanzig = new Audio("/ressources/levelOneLearn/images/korean/consonants/voice/s24.mp3");
var audioFuenfundzwanzig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s25.mp3");
var audioSechsundzwanzig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s26.mp3");
var audioSiebenundzwanzig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s27.mp3");
var audioAchtundzwanzig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s28.mp3");
var audioNeunundzwanzig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s29.mp3");
var audioDreisig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s30.mp3");
var audioEinunddreisig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s31.mp3");
var audioZweiunddreisig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s32.mp3");
var audioDreiunddreisig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s33.mp3");
var audioVierunddreisig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s34.mp3");
var audioFuenfunddreisig = new Audio("/ressources/levelOneLearn/images/korean/compoundVowels/voice/s35.mp3");
var audioSechsunddreisig = new Audio("/ressources/levelOneLearn/images/korean/doubleConsonants/vocal/s36.mp3");
var audioSiebenunddreisig = new Audio("/ressources/levelOneLearn/images/korean/doubleConsonants/vocal/s37.mp3");
var audioAchtunddreisig = new Audio("/ressources/levelOneLearn/images/korean/doubleConsonants/vocal/s38.mp3");
var audioNeununddreisig = new Audio("/ressources/levelOneLearn/images/korean/doubleConsonants/vocal/s39.mp3");
var audioVierzig = new Audio("/ressources/levelOneLearn/images/korean/doubleConsonants/vocal/s40.mp3");
var newLevelReached = document.getElementById("newLevel");
var levelOneContainer = document.getElementById("levelOneContainer");
var closeNewLevel = document.getElementById("closeNewLevel");
var step;
const score = [];
const scoreOne = [];
const maxLetters = 39;

window.onload = function() {
    further.style.display = "none";
    germanMeaning.style.display = "none";
    if (localStorage.getItem('levelOneLearnScore') != null) {
        score.push(localStorage.getItem('levelOneLearnScore'));
        alreadyDone = score[0];
        for (var step = 1; step < alreadyDone; step++) {
            score.push("1");
        }
        progressBar();
        nextLetter();
    } else {
        nextLetter();
    }
}

showGerman.onclick = function() {
    clickForGerman.style.display = "none";
    germanMeaning.style.display = "flex";
    further.style.display = "block";
}

showGermanOne.onclick = function() {
    clickForGerman.style.display = "none";
    germanMeaning.style.display = "flex";
    further.style.display = "block";
}

function progressBar() {
    document.getElementById("progressBarFull").style.width = `${(score.length/maxLetters) * 100}%`;
}

further.onclick = function() {
    further.style.display = "none";
    germanMeaning.style.display = "none";
    if (score.length < 39) {
        score.push("1");
        localStorage.setItem('levelOneLearnScore', score.length);
        clickForGerman.style.display = "flex";
        nextLetter();
        progressBar();
    } else {
        if (scoreOne.length < 39) {
            nextLetterTwo();
            scoreOne.push("1");
            clickForGerman.style.display = "flex";
        } else {
            scoreOne.length = 0;
            nextLetterTwo();
            clickForGerman.style.display = "flex";
        }
    }
    if (score.length === 39 && localStorage.getItem('levelOneQuizDisplayed') === null) {
        levelOneContainer.style.display = "none";
        newLevelReached.style.display = "block";
        localStorage.setItem('levelOneQuizDisplayed', "displayed")
    }
}

closeNewLevel.onclick = function() {
    levelOneContainer.style.display = "block";
    newLevelReached.style.display = "none";
}

function nextLetter() {
    switch(score.length) {
        case 0:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet1.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/1.png';
            soundButton.onclick = function() {
                 audioEins.play();
            }
            break;
        case 1:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet2.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/2.png';
            soundButton.onclick = function() {
                    audioZwei.play();
            }
            break;
        case 2:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet3.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/3.png';
            soundButton.onclick = function() {
                    audioDrei.play();
            }
            break;
        case 3:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet4.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/4.png';
            soundButton.onclick = function() {
                    audioVier.play();
            }
            break;
        case 4:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet5.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/5.png';
            soundButton.onclick = function() {
                 audioFuenf.play();
            }
            break;
        case 5:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet6.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/6.png';
            soundButton.onclick = function() {
                 audioSechs.play();
            }
            break;
        case 6:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet7.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/7.png';
            soundButton.onclick = function() {
                    audioSieben.play();
            }
            break;
        case 7:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet8.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/8.png';
            soundButton.onclick = function() {
                    audioAcht.play();
            }
            break;
        case 8:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet9.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/9.png';
            soundButton.onclick = function() {
                    audioNeun.play();
            }
            break;
        case 9:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet10.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/10.png';
            soundButton.onclick = function() {
                    audioZehn.play();
            }
            break;
        case 10:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet11.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/11.png';
            soundButton.onclick = function() {
                    audioElf.play();
            }
            break;
        case 11:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet12.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/12.png';
            soundButton.onclick = function() {
                    audioZwoelf.play();
            }
            break;
        case 12:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet13.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/13.png';
            soundButton.onclick = function() {
                    audioDreizehn.play();
            }
            break;
        case 13:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet14.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/14.png';
            soundButton.onclick = function() {
                    audioVierzehn.play();
            }
            break;
        case 14:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet15.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/15.png';
            soundButton.onclick = function() {
                    audioFuenfzehn.play();
            }
            break;
        case 15:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet16.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/16.png';
            soundButton.onclick = function() {
                    audioSechzehn.play();
            }
            break;
        case 16:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet17.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/17.png';
            soundButton.onclick = function() {
                    audioSiebtzehn.play();
            }
            break;
        case 17:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet18.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/18.png';
            soundButton.onclick = function() {
                    audioAchtzehn.play();
            }
            break;
        case 18:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet19.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/19.png';
            soundButton.onclick = function() {
                    audioNeunzehn.play();
            }
            break;
        case 19:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet20.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/20.png';
            soundButton.onclick = function() {
                    audioZwanzig.play();
            }
            break;
        case 20:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet21.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/21.png';
            soundButton.onclick = function() {
                    audioEinundzwanzig.play();
            }
            break;
        case 21:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet22.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/22.png';
            soundButton.onclick = function() {
                    audioZweiundzwanzig.play();
            }
            break;
        case 22:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet23.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/23.png';
            soundButton.onclick = function() {
                    audioDreiundzwanzig.play();
            }
            break;
        case 23:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet24.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/24.png';
            soundButton.onclick = function() {
                    audioVierundzwanzig.play();
            }
            break;
        case 24:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet25.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/25.png';
            soundButton.onclick = function() {
                    audioFuenfundzwanzig.play();
            }
            break;
        case 25:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet26.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/26.png';
            soundButton.onclick = function() {
                    audioSechsundzwanzig.play();
            }
            break;
        case 26:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet27.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/27.png';
            soundButton.onclick = function() {
                    audioSiebenundzwanzig.play();
            }
            break;
        case 27:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet28.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/28.png';
            soundButton.onclick = function() {
                    audioAchtundzwanzig.play();
            }
            break;
        case 28:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet29.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/29.png';
            soundButton.onclick = function() {
                    audioNeunundzwanzig.play();
            }
            break;
        case 29:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet30.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/30.png';
            soundButton.onclick = function() {
                    audioDreisig.play();
            }
            break;    
        case 30:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet31.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/31.png';
            soundButton.onclick = function() {
                    audioEinunddreisig.play();
            }
            break;
        case 31:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet32.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/32.png';
            soundButton.onclick = function() {
                    audioZweiunddreisig.play();
            }
            break;
        case 32:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet33.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/33.png';
            soundButton.onclick = function() {
                    audioDreiunddreisig.play();
            }
            break;
        case 33:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet34.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/34.png';
            soundButton.onclick = function() {
                    audioVierunddreisig.play();
            }
            break;
        case 34:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet35.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/35.png';
            soundButton.onclick = function() {
                    audioFuenfunddreisig.play();
            }
            break;
        case 35:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet36.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/36.png';
            soundButton.onclick = function() {
                audioSechsunddreisig.play();
            }
            break;
        case 36:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet37.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/37.png';
            soundButton.onclick = function() {
                    audioSiebenunddreisig.play();
            }
            break;
        case 37:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet38.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/38.png';
            soundButton.onclick = function() {
                    audioAchtunddreisig.play();
            }
            break;
        case 38:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet39.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/39.png';
            soundButton.onclick = function() {
                    audioNeununddreisig.play();
            }
            break;
        case 39:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet40.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/40.png';
            soundButton.onclick = function() {
                    audioVierzig.play();
            }
            break;
        }
}

function nextLetterTwo() {
    switch(scoreOne.length) {
        case 0:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet1.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/1.png';
            soundButton.onclick = function() {
                 audioEins.play();
            }
            break;
        case 1:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet2.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/2.png';
            soundButton.onclick = function() {
                    audioZwei.play();
            }
            break;
        case 2:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet3.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/3.png';
            soundButton.onclick = function() {
                    audioDrei.play();
            }
            break;
        case 3:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet4.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/4.png';
            soundButton.onclick = function() {
                    audioVier.play();
            }
            break;
        case 4:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet5.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/5.png';
            soundButton.onclick = function() {
                 audioFuenf.play();
            }
            break;
        case 5:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet6.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/6.png';
            soundButton.onclick = function() {
                 audioSechs.play();
            }
            break;
        case 6:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet7.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/7.png';
            soundButton.onclick = function() {
                    audioSieben.play();
            }
            break;
        case 7:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet8.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/8.png';
            soundButton.onclick = function() {
                    audioAcht.play();
            }
            break;
        case 8:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet9.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/9.png';
            soundButton.onclick = function() {
                    audioNeun.play();
            }
            break;
        case 9:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/vowals/Alphabet10.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/vowals/vocal/10.png';
            soundButton.onclick = function() {
                    audioZehn.play();
            }
            break;
        case 10:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet11.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/11.png';
            soundButton.onclick = function() {
                    audioElf.play();
            }
            break;
        case 11:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet12.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/12.png';
            soundButton.onclick = function() {
                    audioZwoelf.play();
            }
            break;
        case 12:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet13.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/13.png';
            soundButton.onclick = function() {
                    audioDreizehn.play();
            }
            break;
        case 13:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet14.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/14.png';
            soundButton.onclick = function() {
                    audioVierzehn.play();
            }
            break;
        case 14:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet15.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/15.png';
            soundButton.onclick = function() {
                    audioFuenfzehn.play();
            }
            break;
        case 15:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet16.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/16.png';
            soundButton.onclick = function() {
                    audioSechzehn.play();
            }
            break;
        case 16:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet17.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/17.png';
            soundButton.onclick = function() {
                    audioSiebtzehn.play();
            }
            break;
        case 17:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet18.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/18.png';
            soundButton.onclick = function() {
                    audioAchtzehn.play();
            }
            break;
        case 18:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet19.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/19.png';
            soundButton.onclick = function() {
                    audioNeunzehn.play();
            }
            break;
        case 19:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet20.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/20.png';
            soundButton.onclick = function() {
                    audioZwanzig.play();
            }
            break;
        case 20:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet21.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/21.png';
            soundButton.onclick = function() {
                    audioEinundzwanzig.play();
            }
            break;
        case 21:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet22.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/22.png';
            soundButton.onclick = function() {
                    audioZweiundzwanzig.play();
            }
            break;
        case 22:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet23.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/23.png';
            soundButton.onclick = function() {
                    audioDreiundzwanzig.play();
            }
            break;
        case 23:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/consonants/Alphabet24.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/consonants/german/24.png';
            soundButton.onclick = function() {
                    audioVierundzwanzig.play();
            }
            break;
        case 24:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet25.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/25.png';
            soundButton.onclick = function() {
                    audioFuenfundzwanzig.play();
            }
            break;
        case 25:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet26.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/26.png';
            soundButton.onclick = function() {
                    audioSechsundzwanzig.play();
            }
            break;
        case 26:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet27.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/27.png';
            soundButton.onclick = function() {
                    audioSiebenundzwanzig.play();
            }
            break;
        case 27:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet28.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/28.png';
            soundButton.onclick = function() {
                    audioAchtundzwanzig.play();
            }
            break;
        case 28:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet29.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/29.png';
            soundButton.onclick = function() {
                    audioNeunundzwanzig.play();
            }
            break;
        case 29:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet30.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/30.png';
            soundButton.onclick = function() {
                    audioDreisig.play();
            }
            break;    
        case 30:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet31.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/31.png';
            soundButton.onclick = function() {
                    audioEinunddreisig.play();
            }
            break;
        case 31:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet32.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/32.png';
            soundButton.onclick = function() {
                    audioZweiunddreisig.play();
            }
            break;
        case 32:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet33.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/33.png';
            soundButton.onclick = function() {
                    audioDreiunddreisig.play();
            }
            break;
        case 33:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet34.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/34.png';
            soundButton.onclick = function() {
                    audioVierunddreisig.play();
            }
            break;
        case 34:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/Alphabet35.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/compoundVowels/german/35.png';
            soundButton.onclick = function() {
                    audioFuenfunddreisig.play();
            }
            break;
        case 35:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet36.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/36.png';
            soundButton.onclick = function() {
                audioSechsunddreisig.play();
            }
            break;
        case 36:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet37.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/37.png';
            soundButton.onclick = function() {
                    audioSiebenunddreisig.play();
            }
            break;
        case 37:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet38.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/38.png';
            soundButton.onclick = function() {
                    audioAchtunddreisig.play();
            }
            break;
        case 38:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet39.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/39.png';
            soundButton.onclick = function() {
                    audioNeununddreisig.play();
            }
            break;
        case 39:
            koreanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/Alphabet40.png';
            germanImage.src = '/ressources/levelOneLearn/images/korean/doubleConsonants/german/40.png';
            soundButton.onclick = function() {
                    audioVierzig.play();
            }
            break;
        }
}