let audio = new Audio();
let tracks = []; // Array of selected files
let currentTrackIndex = 0;

// Handle file selection
document.getElementById("file-input").addEventListener("change", (e) => {
    tracks = Array.from(e.target.files); // Convert FileList to array
    if (tracks.length > 0) {
        currentTrackIndex = 0;
        loadTrack(currentTrackIndex);
    }
});

function loadTrack(index) {
    const file = tracks[index];
    if (!file) return;
    audio.src = URL.createObjectURL(file);
    document.getElementById("track-title").innerText = file.name;
}

// Playback controls
function playTrack() {
    if (audio.src) audio.play();
}

function pauseTrack() {
    audio.pause();
}

function nextTrack() {
    if (tracks.length === 0) return;
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function prevTrack() {
    if (tracks.length === 0) return;
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

// Event listeners
document.getElementById("play-button").addEventListener("click", playTrack);
document.getElementById("pause-button").addEventListener("click", pauseTrack);
document.getElementById("next-button").addEventListener("click", nextTrack);
document.getElementById("prev-button").addEventListener("click", prevTrack);

// Optional: auto-play next track when current ends
audio.addEventListener("ended", nextTrack);
