$(document).ready(function () {
    $('.slider .slider__content').slick({
        dots: true
    });
    $('.our-rooms__slider').slick({
        dots: false
    });
    $('.our-rooms__slider .slick-arrow').empty();
    $('.slider .slick-arrow').empty();
});

$(document).ready(function () {
    $('.slider__mouse').click(function () {
        let sizeSlider = document.querySelector('.slider');
        let durationWheel = 100;
        console.log(document.querySelector('.five-reasons').getBoundingClientRect().y);
        let i = 0;
        let scroll = setInterval(function () {
            window.scrollBy(0, 5);
            if (document.querySelector('.five-reasons').getBoundingClientRect().y < 1) {
                clearInterval(scroll);
            }
        }, 1);

    });
});
