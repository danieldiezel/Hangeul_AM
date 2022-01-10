var further = document.getElementById("further");
var clickForGerman = document.getElementById("germanPart");
var showGerman = document.getElementById("showGerman");
var germanMeaning = document.getElementById("germanMeaning");
var germanImage = document.getElementById("germanImage");
var soundButton = document.getElementById("soundButton");
var koreanImage = document.getElementById("koreanImage");
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
const score = [];

window.onload = function() {
    further.style.display = "none";
    nextLetter();
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
    }
}