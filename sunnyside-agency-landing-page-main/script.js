const menu = document.querySelector('.main__burger');
const mobile = document.querySelector('.main__link--mobile');

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (mobile.style.visibility === 'visible') {
    mobile.style.visibility = 'hidden';
  } else {
    mobile.style.visibility = 'visible';
  }
}

