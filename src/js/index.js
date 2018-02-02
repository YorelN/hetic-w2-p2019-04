import '../scss/styles.scss';


const navLogo = document.querySelector('.nav__logo');
const burgerMenu = document.querySelector('.burgerMenu');
const closeButtonMenu = document.querySelector('.closeButton');
const burgerMEnuLinks = document.querySelectorAll('.burgerMenu li');
navLogo.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    // Don't work, will fix it later
    console.log(burgerMEnuLinks);
    burgerMEnuLinks.forEach((link, key) => {
        // This shit don't work, help please ?
        link.classList.add('showLi')
    })
});
closeButtonMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
});


