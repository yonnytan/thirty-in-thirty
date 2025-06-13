function playSound(e) {
  // Stop all currently playing audio elements
  const allAudio = document.querySelectorAll("audio");
  allAudio.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });

  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);

  if (!audio || !key) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  // Remove class when audio ends
  audio.onended = () => {
    key.classList.remove("playing");
  };
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if its not transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
