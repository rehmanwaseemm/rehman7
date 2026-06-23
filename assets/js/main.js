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

  // Play beep music using Web Audio API when requested
  const playBeep = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(440, ctx.currentTime);
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      // fade out after 2 seconds
      gain.gain.setValueAtTime(1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
      oscillator.stop(ctx.currentTime + 2);
    } catch (err) {
      // fallback to alert if audio context fails
      console.log('Audio not supported', err);
    }
  };
  const playBtn = document.querySelector('#play-music');
  if (playBtn) {
    playBtn.addEventListener('click', playBeep);
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
