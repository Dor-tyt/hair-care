document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) return;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleButton.textContent = 'Светлая тема';
  } else {
    toggleButton.textContent = 'Тёмная тема';
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = 'Светлая тема';
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = 'Тёмная тема';
    }
  });
});