window.addEventListener('keydown', e => {
  const { key } = e;
  const validKeys = ['a', 's', 'd', 'f', 'g'];
  if (validKeys.includes(key)) {
    playSound(key);
  } else return;
});

window.addEventListener('click', e => {
  playSound(e.target.id);
});

const playSound = key => {
  const audio = document.getElementById(`sound${key}`);
  if (audio.duration > 0) {
    audio.currentTime = 0;
  }
  audio.play();
};
