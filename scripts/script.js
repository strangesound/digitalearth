let swiperArray = document.querySelectorAll('.swiper-container')

const burgerMenuBtn = document.querySelector('.header__menu-burger')
const burgerMenu = document.querySelector('.header__menu')
const bodyMain = document.body

function openCloseMenu() {
    burgerMenu.classList.toggle('invisible');
    burgerMenuBtn.classList.toggle('active');
    document.body.classList.toggle('lock')
}


burgerMenuBtn.addEventListener('click', () => openCloseMenu());


for (const element of swiperArray) {
    var mySwiper1 = new Swiper(element, {
        // Optional parameters
        loop: true,
        // autoHeight: true,
        setWrapperSize: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // on: {
        //     init: function () {
        //         checkArrow();
        //     },
        //     resize: function () {
        //         checkArrow();
        //     }
        // }
    });
}




function checkArrow() {
    var swiperPrev = document.querySelector('.swiper-button-prev');
    var swiperNext = document.querySelector('.swiper-button-next');
    if (window.innerWidth < 1024) {
        console.log('Success', window.innerWidth);
        swiperPrev.style.display = 'block';
        swiperNext.style.display = 'block';
    } else {
        swiperPrev.style.display = 'none';
        swiperNext.style.display = 'none';
    }
}



// // Safari scroll behavior
// function SmoothVerticalScrolling(e, time, where) {
//     var eTop = e.getBoundingClientRect().top;
//     var eAmt = eTop / 100;
//     var curTime = 0;
//     while (curTime <= time) {
//         window.setTimeout(SVS_B, curTime, eAmt, where);
//         curTime += time / 100;
//     }
// }

// function SVS_B(eAmt, where) {
//     if (where == "center" || where == "")
//         window.scrollBy(0, eAmt / 2);
//     if (where == "top")
//         window.scrollBy(0, eAmt);
// }

// // SmoothVerticalScrolling()

// delegate all click events to this handler...
// document.addEventListener('click', function (e) {

//     // ...we only care about clicks on 'a' elements
//     if (e.target.tagName.toLowerCase() === 'a') {

//         // remove all applied '.active' classes
//         Array.prototype.forEach.call(document.querySelectorAll('.active'), function (el) {
//             el.classList.remove('active');
//         });

//         // add an '.active' class to style the anchor
//         e.target.classList.add('active');
//     }
// });



