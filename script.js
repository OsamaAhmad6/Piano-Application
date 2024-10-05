const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

// Key-to-note mapping
const keyNoteMap = {
    'a': 'C',  // 'A' key plays C note
    'w': 'Db', // 'W' key plays Db note
    's': 'D',  // 'S' key plays D note
    'e': 'Eb', // 'E' key plays Eb note
    'd': 'E',  // 'D' key plays E note
    'f': 'F',  // 'F' key plays F note
    't': 'Gb', // 'T' key plays Gb note
    'g': 'G',  // 'G' key plays G note
    'y': 'Ab', // 'Y' key plays Ab note
    'h': 'A',  // 'H' key plays A note
    'u': 'Bb', // 'U' key plays Bb note
    'j': 'B'   // 'J' key plays B note
};


keys.forEach(key => key.addEventListener("click", handleKeyClick));

function handleKeyClick() {
    playKey(this);
}


function playKey(key) {
    const keyAudio = document.getElementById(key.dataset.note);
    
    keyAudio.currentTime = 0;
    keyAudio.play();

    key.classList.add("active");

    keyAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    });
}


document.addEventListener("keydown", (e) => {
    const note = keyNoteMap[e.key.toLowerCase()];
    if (note) {
        const key = document.querySelector(`.key[data-note="${note}"]`);
        if (key) {
            playKey(key);
        }
    }
});
