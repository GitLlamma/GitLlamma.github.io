var isPlaying = false;
var source = null;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    let i = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index === 7) {
                return " ";
            }
            if(index < i) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

    if (i >= event.target.dataset.value.length){
        clearInterval(interval);
    }

    i += 1 / 3;
    }, 30);
}

// add each song from a folder named 'unfinished_songs' to the table
function playSwitch() {
    if (isPlaying) {
        document.getElementById("play_button").innerHTML = "Play";
        document.getElementById("player").pause();
        console.log("Pausing")
    }
    else {
        document.getElementById("play_button").innerHTML = "Pause";
        document.getElementById("player").src='unfinished_songs/' + source;
        document.getElementById("player").play();
        console.log("Playing")
    }
    isPlaying = !isPlaying;
}

function choose(song) {
    source = song;
    if (document.getElementById("play_button").disabled==true) {
        document.getElementById("play_button").disabled = false;
    }
    document.getElementById("player").pause();
    document.getElementById("play_button").innerHTML = "Play";
    document.getElementById("currSong").innerHTML = song;
    isPlaying = false;
}
