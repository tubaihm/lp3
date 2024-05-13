$(function () {
    $('.carousel').slick({
        arrows: false,
        dots: true,
        slidetoShow: 3,
        responsive: [
            {
                breakpoint: 767, // 399px以下のサイズに適用
                settings: {
                    centerMode: true,
                    variableWidth: true,
                            },
            },
        ],
    });
});

