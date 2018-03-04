// eslint-disable-next-line
let lock = false;
$('.header-menu__item').click(function () {
    let myThis = this;
    if (lock !== true) {
        $('.header-menu__item').each(function () {
            if (this !== myThis) {
                if (this.classList.contains('header-menu__item_active')) {
                    $(this).removeClass('header-menu__item_active');
                    $(this).find('.header-menu__item-menu').slideToggle('normal');
                }
            }
        });
        if (this.classList.contains('header-menu__item_active') === false) {
            $(this).find('.header-menu__item-menu').slideToggle('normal');
            $(this).addClass('header-menu__item_active');
        } else {
            $(this).find('.header-menu__item-menu').slideToggle('normal');
            $(this).removeClass('header-menu__item_active');
        }
        lock = true;
        setTimeout(function () {
            lock = false;
        }, 500);
    }
});


let menuScroll;
let menu = document.querySelector('.header-menu');
let body = document.querySelector('body');

function menuFixed() {
    let changeMenu = false;
    if (body.getBoundingClientRect().y < -120) {
        menu.classList.add('header-menu_fixed');

    } else {
        menu.classList.remove('header-menu_fixed');
    }
    $('.animated').each(function () {
        if (document.documentElement.clientHeight > this.getBoundingClientRect().y) {
            this.classList.add('fadeInUp');
        }
    });
}

menuFixed();

window.onscroll = function () {
    clearTimeout(menuScroll);
    menuScroll = setTimeout(menuFixed, 10);
};
