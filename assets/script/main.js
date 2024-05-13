if (window.matchMedia( "(max-width: 768px)" ).matches) {
    $('.carousel').slick({
        autoplay: false,
        arrows: false,
        dots: true,
        centerMode: true,
        variableWidth: true,
    }
    );  
} else {
    $('.carousel').slick({
        autoplay: false,
        arrows: false,
        dots: true,
        slidetoShow: 3,
        slidetoScroll: 1,
        }
    );
}