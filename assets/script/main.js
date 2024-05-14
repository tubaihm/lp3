$(function () {
    $('.carousel').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true,
                            },
            },
        ],
    });
});

