const burgerMenu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.header__nav');
const show = document.querySelector('.show');
const features = document.querySelector('.features');
const company = document.querySelector('.company');
const visible = document.querySelector('.visible');
const deskArr = document.querySelectorAll('.desk__arr');

let isNavVisible = false;

const toggleMenu = () => {
  overlay.classList.toggle('opacity');
  overlay.style.opacity = overlay.style.opacity === '0.5' ? '0' : '0.5';
  burgerMenu.src = burgerMenu.src.includes('icon-menu.svg') ? './images/icon-close-menu.svg' : './images/icon-menu.svg';
  burgerMenu.alt = burgerMenu.alt === 'Menu hamburger' ? 'Close hamburger' : 'Menu hamburger';

  isNavVisible = !isNavVisible;
  nav.style.display = isNavVisible ? 'block' : 'none';
};

nav.style.display = isNavVisible ? 'block' : 'none';

burgerMenu.addEventListener('click', toggleMenu);

window.onload = () => {
  const close = document.querySelector('.close');
  if (close) {
    close.addEventListener('click', closeFeatures);
  }
};

const closeFeatures = () => {
  show.classList.remove('show');
};

const toggleFeatures = () => {
  show.classList.toggle('show');
  const arrowIcon = document.querySelector('.arr');
  arrowIcon.src = show.classList.contains('show') ? './images/icon-arrow-down.svg' : './images/icon-arrow-up.svg';
};

features.addEventListener('click', toggleFeatures);

const companyFeatures = () => {
  visible.classList.toggle('visible');
  const arrowIcon = document.querySelector('.com');
  arrowIcon.src = visible.classList.contains('visible') ? './images/icon-arrow-down.svg' : './images/icon-arrow-up.svg';
};

company.addEventListener('click', companyFeatures);

deskArr.forEach((e, index) => {
  e.addEventListener('click', () => {
    const deskDrop = document.querySelectorAll('.desk__drop');
    const clickedDrop = deskDrop[index];
    const arrowImg = e.querySelector('img');

    clickedDrop.style.display = clickedDrop.style.display === 'flex' ? 'none' : 'flex';
    arrowImg.src = clickedDrop.style.display === 'flex' ? './images/icon-arrow-up.svg' : './images/icon-arrow-down.svg';
  });
});
