$(function () {
    $('.carousel').slick({
        arrows: false,
        dots: true,
        slidetoShow: 3,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    centerMode: true,
                    variableWidth: true,
                            },
            },
        ],
    });
});

