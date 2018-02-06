import '../scss/styles.scss';
import { perf } from "./perf";

const navLogo = document.querySelector('.nav__logo');
const burgerMenu = document.querySelector('.burgerMenu');
const closeButtonMenu = document.querySelector('.closeButton');
if (navLogo) {
    navLogo.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
    });
}

if (closeButtonMenu) {
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

if (closeBtn) {
    closeBtn.addEventListener('click', function () {
        contactForm.classList.add('hidden');
    });
}

const firstSectionImg = document.querySelector('.firstSectionImg');


document.addEventListener('scroll', function () {
    if (isInViewport(firstSectionImg) && firstSectionImg.className !== 'firstSectionImg active') {
        firstSectionImg.classList.add('active');
        firstSectionImg.style.backgroundPosition = '50% 0';
    }
    if (!isInViewport(firstSectionImg) && firstSectionImg.className === 'firstSectionImg active') {
        firstSectionImg.classList.remove('active');
        firstSectionImg.style.transition = '0.3s';
        firstSectionImg.style.backgroundPosition = '170% 0';
    }

    const desktopNav = document.querySelector('.navBar');
    const sectionContent = document.querySelector('header.header');



    if (window.scrollY > sectionContent.offsetHeight - 25) {
        desktopNav.style.background = 'rgba(0, 0, 0, 0.4)'
    } else {
        desktopNav.style.background = 'transparent'
    }
});

// perf section
const perfContainer = document.querySelectorAll('.perfContainer div');
const iconContainer = document.querySelectorAll('.iconContainer div');



for (let i = 0; i < perfContainer.length; i++) {
    const currPerf = perfContainer[i];
    currPerf.style.cursor = 'pointer';
    const keyName = currPerf.textContent.toLowerCase();


    currPerf.addEventListener('click', function () {
        const perfKeyName = Object.keys(perf);
        const perfValue = Object.values(perf);

        perfContainer.forEach(function (perf) {
            perf.className = '';
        });
        this.classList.toggle('activePerfColor');
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
