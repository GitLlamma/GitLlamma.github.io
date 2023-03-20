var isPlaying = false;
var source = null;
var songDict = {};
songDict['dowithoutyou'] = [false,'<strong>Verse 1</strong><br>I can\'t figure out<br>why you shut down<br>when I\'m around<br>no matter the day<br>Is there something that I\'m missing<br>you won\'t tell me?<br>After all I\'ve done<br>being your friend<br>there till the end<br>but not anymore<br>There\'s nothing to drink from here the water\'s tainted<br><br><strong>Chorus</strong><br>And I can do without you<br>So don\'t go bail me out, bail me out again<br>Cause I can do without the, without the pain<br>Of finding out the hard way that you\'re insane'];
songDict['getmynameright'] = [false, '<strong>Verse 1</strong><br>By now you should feel the fire<br>burning up from underneath<br>And the ashes in the carpet<br>spell me out<br>But you don\'t have to get my name right<br>Cause you\'ll remember me<br>After you see what I do ooooo<br><br><strong>Chorus</strong><br>Do you know<br>where you are?<br>Near the end<br>of the start<br>If you can\'t<br>read the signs,<br>run away<br>You\'re out of time<br>Are you even awake?<br>Are you even alive?<br>Cause you made a mistake<br>And you crossed a line<br>If I had the choice<br>I don\'t think I would change<br>what I have done<br>I would do over again<br>And again and again and again and again<br><br><strong>Verse 2</strong><br>Now something\'s got me feeling wired<br>to destroy my enemies<br>So I\'ma change my name to sire<br>Take a bow<br>But you don\'t have to get my name right<br>Cause you\'ll remember me<br>After you see who I have become<br><br><strong>REPEAT CHORUS</strong><br><br><strong>BRIDGE</strong><br><br><strong>FINAL CHORUS</strong>'];
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

function toggleExpand(song) {
    console.log(songDict[song]);
    songDict[song][0] = !songDict[song][0];
    if (songDict[song][0]){
        document.getElementById(song).innerHTML = songDict[song][1];
    } else {
        document.getElementById(song).innerHTML = "";
    }
}