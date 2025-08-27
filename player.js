const musicFiles = [
    { title: "Song 1", src: "path/to/song1.mp3" },
    { title: "Song 2", src: "path/to/song2.mp3" },
    { title: "Song 3", src: "path/to/song3.mp3" }
];

let currentTrackIndex = 0;
let audio = new Audio();

function loadTrack(index) {
    audio.src = musicFiles[index].src;
    document.getElementById("track-title").innerText = musicFiles[index].title;
}

function playTrack() {
    if (audio.src) {
        audio.play();
    } else {
        loadTrack(currentTrackIndex);
        audio.play();
    }
}

function pauseTrack() {
    audio.pause();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % musicFiles.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + musicFiles.length) % musicFiles.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

document.getElementById("play-button").addEventListener("click", playTrack);
document.getElementById("pause-button").addEventListener("click", pauseTrack);
document.getElementById("next-button").addEventListener("click", nextTrack);
document.getElementById("prev-button").addEventListener("click", previousTrack);

// Load the first track on startup
loadTrack(currentTrackIndex);
