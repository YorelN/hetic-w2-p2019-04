import '../scss/styles.scss';
import { perf } from "./perf";

const navLogo = document.querySelector('.nav__logo');
const burgerMenu = document.querySelector('.burgerMenu');
const closeButtonMenu = document.querySelector('.closeButton');
const burgerMEnuLinks = document.querySelectorAll('.burgerMenu li');
if (navLogo) {
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
}

let contactBtn = document.querySelector('.btn-contact');
let contactForm = document.querySelector('.contactForm');
let closeBtn = document.querySelector('.cross');

contactBtn.addEventListener('click', function () {
    contactForm.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
    contactForm.classList.add('hidden');
});


const firstSectionImg = document.querySelector('.firstSectionImg');


document.addEventListener('scroll', function () {
    if (isInViewport(firstSectionImg) && firstSectionImg.className !== 'firstSectionImg active') {
        firstSectionImg.classList.add('active');
        firstSectionImg.style.backgroundPosition = '100% 0';

    }
});





// perf section


const perfContainer = document.querySelectorAll('.perfContainer div');



for (let i = 0; i < perfContainer.length; i++) {
    const currPerf = perfContainer[i];
    const keyName = currPerf.textContent.toLowerCase();

    currPerf.addEventListener('click', function () {
        const perfKeyName = Object.keys(perf);
        const perfValue = Object.values(perf);

        const perfOne = document.querySelector('.perfKeyOne');
        const perfTwo = document.querySelector('.perfKeyTwo');
        const mesurePerfOne = document.querySelector('.mesurePerfKeyOne');
        const mesurePerfTwo = document.querySelector('.mesurePerfKeyTwo');

        const perfWithOne = perfValue[i].one.split(' ')[0];
        const perfWithTwo = perfValue[i].two.split(' ')[0];
        const mesurePerfWithOne = perfValue[i].one.split(' ')[1];
        const mesurePerfWithTwo = perfValue[i].two.split(' ')[1];
        if (keyName === perfKeyName[i]) {
            perfOne.innerHTML = perfWithOne;
            perfTwo.innerHTML = perfWithTwo;

            mesurePerfOne.innerHTML = mesurePerfWithOne;
            mesurePerfTwo.innerHTML = mesurePerfWithTwo;
        }
    })
}


























function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
};
