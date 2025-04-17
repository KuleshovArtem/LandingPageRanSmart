$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlede(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };
    toggleSlede('.catalog-item__link');
    toggleSlede('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    })
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
    })
    $('.btn_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    })

    function valideForms(form) {
        $(form).validate(
            {
                rules: {
                    name: "required",
                    phone: "required",
                    email: {
                        required: true,
                        email: true,
                    }
                },
                messages: {
                    name: "Пожалуйста, введите свое имя",
                    phone: "Пожалуйста, введите свой номер телефона",
                    email: {
                        required: "Пожалуйста, введите свою почту",
                        email: "Неправильно ввведен адрес почты"
                    }
                }
            }
        );
    }

    valideForms('#consultation form');
    valideForms('#order form');
    valideForms('#consultation-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});