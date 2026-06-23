// main.js
// Handles the navigation toggle, memory jar modal, and audio playback.

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#primary-menu');
  const audioPlayer = document.querySelector('#bg-audio');

  // Toggle mobile menu
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('is-open', !expanded);
    });
  }

  // Handle audio playback. When the play button is clicked, play or
  // pause the background music. This uses a standard <audio> element
  // referenced by the #bg-audio ID and allows the user to control
  // playback without creating new AudioContexts on each click.
  const playBtn = document.querySelector('#play-music');
  if (playBtn && audioPlayer) {
    playBtn.addEventListener('click', () => {
      if (audioPlayer.paused) {
        audioPlayer.play().catch((err) => {
          console.log('Audio playback failed', err);
        });
        playBtn.textContent = 'Pause our tune';
      } else {
        audioPlayer.pause();
        playBtn.textContent = 'Play our tune';
      }
    });
  }

  // Memory jar modal
  const notes = document.querySelectorAll('.memory-note');
  const dialog = document.querySelector('#memory-dialog');
  const dialogText = document.querySelector('#memory-dialog-text');
  const closeBtn = document.querySelector('#memory-close');

  notes.forEach((note) => {
    note.addEventListener('click', () => {
      if (dialog && dialogText) {
        dialogText.textContent = note.dataset.memory || '';
        // Set the dialog background based on the note's class. We look for
        // note-1, note-2, etc. and map them to CSS variables defined in
        // :root (--note1-bg, --note2-bg, etc.).
        const classes = Array.from(note.classList);
        const noteClass = classes.find((cls) => cls.startsWith('note-'));
        if (noteClass) {
          const rootStyle = getComputedStyle(document.documentElement);
          const bgVar = '--' + noteClass.replace('note-', 'note') + '-bg';
          const bgColor = rootStyle.getPropertyValue(bgVar) || 'rgba(255,255,255,0.8)';
          dialog.style.background = bgColor.trim();
        }
        dialog.showModal();
      }
    });
  });

  if (closeBtn && dialog) {
    closeBtn.addEventListener('click', () => {
      dialog.close();
    });
  }
});