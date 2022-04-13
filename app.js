let menu = document.querySelector('.menu-link');
let menuLinks = document.querySelector('.menu-links');

function clickButton() {
  if (menuLinks.style.display === 'flex') {
    menuLinks.style.display = 'none';
  } else {
    menuLinks.style.display = 'flex';
  }
}
