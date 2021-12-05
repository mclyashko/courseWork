var audio = document.getElementById('audio');
audio.volume = 0.1;
var playPause = document.getElementById('playPause');
var isPlaying = false;

function playPauseF() {
    if (!isPlaying) {
        isPlaying = true;
        playPause.innerHTML = "Pause";
        audio.play();
    }
    else {
        isPlaying = false;
        playPause.innerHTML = "Play";
        audio.pause();
    }
}

function stopF() {
    isPlaying = true;
    playPauseF();
    audio.pause();
    audio.currentTime = 0;
}