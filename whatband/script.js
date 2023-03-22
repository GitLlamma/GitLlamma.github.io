var isPlaying = false;
var source = 0;
var songs = ["letloose.wav", "JetalMazzv1.wav"];
var names = ["Get My Name Right", "Do Without You"];
document.getElementById("player").src='unfinished_songs/' + songs[source];
document.getElementById("banner").style.opacity = 1;
const delay = ms => new Promise(res => setTimeout(res, ms));


document.querySelector("#player").addEventListener("ended", () => {
    nextSong();
  });

const waitABit = async () => {
    await delay(1000);
    document.getElementById("whatband").style.opacity = 1;
};

waitABit();

function playSong(element) {
    console.log(element);
    source = Number(element.dataset.id);
    console.log(source);
    document.getElementById("player").src='unfinished_songs/' + songs[source];
    document.getElementById("player").play();
    document.getElementById("play").src='images/pause.png';
    document.getElementById("title").innerHTML=names[source];
    isPlaying = true;
}

function nextSong() {
    source = (source + 1) % songs.length;
    console.log(source);
    document.getElementById("player").src='unfinished_songs/' + songs[source];
    document.getElementById("title").innerHTML=names[source];
    if (isPlaying) {
        document.getElementById("player").play();
    }
}

function playSwitch() {
    if (isPlaying) {
        document.getElementById("player").pause();
        document.getElementById("play").src='images/play.png';
        console.log("Pausing")
    }
    else {
        document.getElementById("player").play();
        document.getElementById("play").src='images/pause.png';
        console.log("Playing")
    }
    isPlaying = !isPlaying;
}