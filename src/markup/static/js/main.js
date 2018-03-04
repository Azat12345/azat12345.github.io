'use strict';

import polyfills from './libraries/polyfills';
import '../../components/custom-scroll/custom-scroll';
import '../../components/header-menu/header-menu';
import '../../components/slider/slider';
import 'slick-carousel';

console.log(document.documentElement.clientHeight);

// $('.five-reasons__title').click(function () {
//     console.log(this.getBoundingClientRect().y);
//     setInterval(() => {

//     }, 100);
// });

// let scrollAnimated;

// $(window).scroll(function () {
//     clearTimeout(scrollAnimated);
//     console.log('1');
//     scrollAnimated = setTimeout(function () {

//     });
// });



$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
});
