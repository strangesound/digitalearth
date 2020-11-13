var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    // autoHeight: true,
    setWrapperSize: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        // dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            
        },
        1024: {
           
        },
        768: {
            
        },
        675: {
            
        }
    },
    on: {
        init: function () {
            checkArrow();
        },
        resize: function () {
            checkArrow();
        }
    }
});




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



// Safari scroll behavior
function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if (where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}