'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

function closeMenu() {
  if (!menuToggle || !navigation) return;
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    navigation.classList.toggle('is-open', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  });

  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      closeMenu();
      if (wasOpen) menuToggle.focus();
    }
  });

  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });

  window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());
