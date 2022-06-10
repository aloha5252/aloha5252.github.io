// document.querySelector('.top_banner i').addEventListener('click', bannerClose);

// var bannerClose = function () {
//     document.querySelector('top_banner').style.display = 'none';
// }

$(function () {

    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    });

    $('.main_slider').slick({
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,

    });

})