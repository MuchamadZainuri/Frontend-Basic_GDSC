/**
 * desc: berisi logic website seperti (slider, get api, dsb)
 */
/**
 * desc: berisi logic website seperti (slider, get api, dsb)
 */
const header = document.querySelector('header');
const navAnchor = document.querySelectorAll('nav ul li a');

const setActiveMenu = () => {
    setTimeout(() => {
        for (i = 0; i < navAnchor.length; i++) {
            navAnchor[i].classList.remove('nav-active');
            if (window.location.href.indexOf(navAnchor[i].href) >= 0) {
                navAnchor[i].className = 'nav-active';
            }
        }
    }, 100);
};

const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.padding = '4px 0px 4px 0px';
        header.style.backgroundColor = 'rgba(31, 31, 31, 1)';
    } else {
        header.style.padding = '8px 0px 8px 0px';
        header.style.backgroundColor = 'rgba(31, 31, 31, 0.2)';
    }
};

window.onscroll = () => {
    scrollFunction();
};
window.onload = setActiveMenu();

const showHamburgerMenu = () => {
    var hamburger_list = document.querySelector('.list-menu-hamburger');
    if (hamburger_list.style.display === 'block') {
        hamburger_list.style.display = 'none';
    } else {
        hamburger_list.style.display = 'block';
    }
};

const slideContainer = document.querySelector('.slider');
const sliderRating = document.querySelector('.slider-rating');
const sliderDate = document.querySelector('.slider-date');
const sliderTitle = document.querySelector('.slider-title');
const btnLeft = document.querySelector('.slider-btn-left');
const btnRight = document.querySelector('.slider-btn-right');

const sliderImages = [
    {
        src: '/img/slider-1.jpg',
        rating: '8/10',
        date: '2022-02-03',
        title: 'A Must Be',
    },
    {
        src: '/img/slider-2.jpg',
        rating: '7.6/10',
        date: '2022-02-04',
        title: 'Scared Loved',
    },
    {
        src: '/img/slider-3.jpg',
        rating: '3/10',
        date: '2022-02-06',
        title: 'Man Behind the Tree',
    },
];

let slideCounter = 0;

const startSlider = () => {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`;
    sliderRating.innerHTML = sliderImages[0].rating;
    sliderDate.innerHTML = sliderImages[0].date;
    sliderTitle.innerHTML = sliderImages[0].title;
};

btnRight.addEventListener('click', function () {
    if (slideCounter === sliderImages.length - 1) {
        slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`;
        sliderRating.innerHTML = sliderImages[0].rating;
        sliderDate.innerHTML = sliderImages[0].date;
        sliderTitle.innerHTML = sliderImages[0].title;
        slideCounter = -1;

        slideContainer.classList.add('fadeIn');
        setTimeout(() => {
            slideContainer.classList.remove('fadeIn');
        }, 1000);
    }
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter + 1].src})`;
    sliderRating.innerHTML = sliderImages[slideCounter + 1].rating;
    sliderDate.innerHTML = sliderImages[slideCounter + 1].date;
    sliderTitle.innerHTML = sliderImages[slideCounter + 1].title;
    slideCounter++;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
        slideContainer.classList.remove('fadeIn');
    }, 1000);
});

btnLeft.addEventListener('click', function () {
    if (slideCounter === 0) {
        slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[sliderImages.length - 1].src})`;
        sliderRating.innerHTML = sliderImages[sliderImages.length - 1].rating;
        sliderDate.innerHTML = sliderImages[sliderImages.length - 1].date;
        sliderTitle.innerHTML = sliderImages[sliderImages.length - 1].title;
        slideCounter = sliderImages.length;
        slideContainer.classList.add('fadeIn');
        setTimeout(() => {
            slideContainer.classList.remove('fadeIn');
        }, 1000);
    }

    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[slideCounter - 1].src})`;
    sliderRating.innerHTML = sliderImages[slideCounter - 1].rating;
    sliderDate.innerHTML = sliderImages[slideCounter - 1].date;
    sliderTitle.innerHTML = sliderImages[slideCounter - 1].title;
    slideCounter--;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
        slideContainer.classList.remove('fadeIn');
    }, 1000);
});
document.addEventListener('DOMContentLoaded', startSlider);