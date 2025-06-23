const toggleBtn = document.getElementById('modo-toggle');
const body = document.body;

const savedMode = localStorage.getItem('modo');

if (savedMode) {
  body.className = savedMode;
  toggleBtn.textContent = savedMode === 'dark' ? '🌚' : '🌞';
} else {
  body.className = 'dark';
  toggleBtn.textContent = '🌚';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  const isDark = body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '🌚' : '🌞';
  localStorage.setItem('modo', isDark ? 'dark' : 'light');
});