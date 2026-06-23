// script.js – simple interactivity for our love website

// Wait for the DOM to fully load before hiding the loading screen
window.addEventListener('load', () => {
  const loading = document.getElementById('loading-screen');
  setTimeout(() => {
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
    }, 1000);
  }, 600);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Memory jar interactivity
function openMemory(elem) {
  const modal = document.getElementById('memory-modal');
  const content = modal.querySelector('.memory-content');
  const message = elem.getAttribute('data-memory');
  content.textContent = message;
  modal.style.display = 'flex';
}

function closeMemory(event) {
  // Close only when clicking outside the content
  if (event.target.classList.contains('memory-modal')) {
    event.target.style.display = 'none';
  }
}

// Secret button functionality
const secretBtn = document.getElementById('secret-btn');
const secretModal = document.getElementById('secret-modal');
secretBtn.addEventListener('click', () => {
  secretModal.style.display = 'flex';
});

function closeSecret(event) {
  if (event.target.classList.contains('memory-modal')) {
    event.target.style.display = 'none';
  }
}

// Scroll to top function for final section button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Music toggle
function toggleMusic() {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  if (audio.paused) {
    audio.play();
    btn.textContent = '🎵 Pause Music';
  } else {
    audio.pause();
    btn.textContent = '🎵 Play Music';
  }
}
