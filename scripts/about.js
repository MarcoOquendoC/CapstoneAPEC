const menuIcon = document.getElementsByClassName('toggle')[0];
const navbar = document.getElementById('navbar');
const navs = document.getElementsByClassName('nav');
const bars = document.getElementsByClassName('bar');
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

function toggle() {
  navbarLinks.classList.toggle('active');
  navbar.classList.toggle('active');
  bars[0].classList.toggle('active');
  bars[1].classList.toggle('active');
  bars[2].classList.toggle('active');
}

function closeNav() {
  navbarLinks.classList.remove('active');
  navbar.classList.remove('active');
  bars[0].classList.remove('active');
  bars[1].classList.remove('active');
  bars[2].classList.remove('active');
}

menuIcon.addEventListener('click', toggle);

navs[0].addEventListener('click', closeNav);
navs[1].addEventListener('click', closeNav);
navs[2].addEventListener('click', closeNav);
navs[3].addEventListener('click', closeNav);
