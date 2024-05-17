import $ from "jquery";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';


function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const orientationchangenew = new Event("orientationchangenew");

window.addEventListener('resize', debounce(function () {
    requestAnimationFrame(function () {
        window.dispatchEvent(orientationchangenew);
    });
}, 150));


AOS.init();

window.addEventListener("orientationchangenew", function () {
    setTimeout(() => {
        AOS.refreshHard();
    }, 500);
});


// jl
$(function () {
   // console.log('test');

   var expSwiper = new Swiper(".expSwiper", {
    slidesPerView: "auto",
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.exp-next',
        prevEl: '.exp-prev',
    },
  });









});

// wl
$(function () {

});



$(function () {
    // $.ajax({
    //     type: "get",
    //     url: "/main",
    //     dataType: "html",
    //     success: function (data) {
    //         console.log(typeof data);
    //         // const fragment = document.createDocumentFragment();
    //         // fragment.appendChild(data);
    //         // const range = document.createRange();
    //         // const fragment = range.createContextualFragment(data);
    //         // console.log(fragment);
    //         // document = fragment;
    //         document.open();
    //         document.write(data);
    //         document.close();
    //         // console.log($(document).html(data));
    //     },
    //     error: function (error) {
    //         console.log(error);
    //     }
    // });
});

