var isPlaying = false;
var source = null;

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
    isPlaying = false;
}