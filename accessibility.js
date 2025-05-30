document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('accessibilityToggle');
  const panel = document.getElementById('accessibilityPanel');

  if (toggleButton && panel) {
    toggleButton.addEventListener('click', () => {
      panel.classList.toggle('hidden');
      panel.setAttribute('aria-hidden', panel.classList.contains('hidden'));
    });
  }

  window.adjustFontSize = function (change) {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    body.style.fontSize = `${currentSize + change}px`;
  };

  window.toggleDarkMode = function () {
    document.body.classList.toggle('dark-mode');
  };

  window.toggleHighContrast = function () {
    document.body.classList.toggle('high-contrast');
  };

  window.toggleImages = function () {
    document.body.classList.toggle('no-images');
  };

  window.toggleLinkHighlight = function () {
    document.body.classList.toggle('highlight-links');
  };
  
  window.toggleColorBlindMode = function () {
  document.body.classList.toggle('colorblind-mode');
  };

  window.resetAccessibility = function () {
    const body = document.body;
    body.classList.remove(
      'dark-mode',
      'high-contrast',
      'no-images',
      'highlight-links',
      'colorblind-mode'
    );
    body.style.fontSize = '';
  };
});
