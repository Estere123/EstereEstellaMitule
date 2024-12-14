const hamburger = document.getElementById('hamburger');
const navUL = document.querySelector('nav> ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});