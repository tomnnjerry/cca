(function ($) {
    "use strict";
    var windowOn = $(window);

    /* Windows Load */
    $(window).on('load', function () {
        wowAnimation();
        preLoader();
    });

    /* Preloader activation */
    function preLoader() {
        $('#loading').delay(500).fadeOut(500);
    };

    /* Wow Active */
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    /* footer year */
    var yearElement = document.getElementById("year");
    if (yearElement) { yearElement.innerHTML = new Date().getFullYear(); }
    /* footer year */

    /* Sidebar Toggle */
    $(".offcanvas-close,.offcanvas-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("info-open");
        $(".offcanvas-overlay").removeClass("overlay-open");
    });
    $(".sidebar-toggle").on("click", function () {
        $(".offcanvas-area").addClass("info-open");
        $(".offcanvas-overlay").addClass("overlay-open");
    });

    /* Body overlay Js */
    $(".body-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    /* Sticky Header Js */
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 250) {
            $("#header-sticky").addClass("bd-sticky");
        } else {
            $("#header-sticky").removeClass("bd-sticky");
        }
    });

    /* Data Css js */
    $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    /* MagnificPopup image view */
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    /* MagnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /* Nice Select Js */
    $(".shop-selector-sort, .country-list").niceSelect();

    /* PureCounter Js */
    new PureCounter();
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });

    /* Menu nav activation */
    document.addEventListener('DOMContentLoaded', function () {
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
        const navLinks = document.querySelectorAll('.main-menu ul li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === pgurl || link.getAttribute('href') === '') {
                link.classList.add('active');
                let parent = link.closest('li');
                while (parent) {
                    const parentLink = parent.querySelector('a');
                    if (parentLink && !parentLink.classList.contains('active')) {
                        parentLink.classList.add('active');
                    }
                    parent = parent.closest('ul')?.closest('li');
                }
            }
        });
    });

    /* Mobile Menu Js */
    $(document).ready(function () {
        var bdMenuWrap = $('.bd-mobile-menu-active > ul').clone();
        var bdSideMenu = $('.bd-offcanvas-menu nav');
        bdSideMenu.append(bdMenuWrap);
        if ($(bdSideMenu).find('.submenu, .mega-menu').length != 0) {
            $(bdSideMenu).find('.submenu, .mega-menu').parent().append('<button class="bd-menu-close"><i class="fa fa-chevron-right"></i></button>');
        }

        var sideMenuList = $('.bd-offcanvas-menu nav > ul > li button.bd-menu-close, .bd-offcanvas-menu nav > ul li.has-dropdown > a');

        $(sideMenuList).on('click', function (e) {
            e.preventDefault();

            var $this = $(this).parent();
            var $siblings = $this.siblings('li');

            if (!$this.hasClass('active')) {
                /* Close all active submenus */
                $('.bd-offcanvas-menu nav > ul > li> ul > li.active').removeClass('active').children('.submenu, .mega-menu').slideUp();

                /* Open the clicked submenu */
                $this.addClass('active').children('.submenu, .mega-menu').slideDown();

                /* Close the sibling submenus */
                $siblings.removeClass('active').children('.submenu, .mega-menu').slideUp();
            } else {
                /* Close the clicked submenu */
                $this.removeClass('active').children('.submenu, .mega-menu').slideUp();
            }
        });
        /* Sidebar toggle */
        $('.sidebar-toggle .bar-icon').on('click', function () {
            $('.bd-offcanvas-menu').toggleClass('active');
        });
    });

    /* One Page Scroll Js */
    function scrollNav() {
        $('.landing-page-menu ul li a').on("click", function () {
            $(".landing-page-menu ul li a.active").removeClass("active");
            $(this).addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 96
            }, 300);
            return false;
        });
    }
    scrollNav();

    /* popup search activation */
    $(".bd-search-open-btn").on("click", function () {
        $(".bd-search-popup-area").addClass("bd-search-opened");
        $(".bd-search-overlay").addClass("bd-search-opened");
    });
    $(".bd-search-close-btn").on("click", function () {
        $(".bd-search-popup-area").removeClass("bd-search-opened");
        $(".bd-search-overlay").removeClass("bd-search-opened");
    });
    $(".bd-search-overlay").on("click", function () {
        $(".bd-search-popup-area").removeClass("bd-search-opened");
        $(".bd-search-overlay").removeClass("bd-search-opened");
    });

    /* All Swiper Slider Activation Start */

    /* Home One Main Hero Active */
    var swiper = new Swiper(".mainHeroActive", {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 7000,
        },
        pagination: {
            el: ".main-hero-dot",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<button>' + '0' + (index + 1) + '</button>' + "</span>";
            },
        },
    });

    /* Home Two Hero Active */
    var swiper = new Swiper(".heroTwoActive", {
        loop: true,
        freemode: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        autoplay: true,
        speed: 1500,
        autoplay: {
            delay: 7000,
        },
        navigation: {
            nextEl: ".bd-hero-navigation-next",
            prevEl: ".bd-hero-navigation-prev",
        },
    });
    /* Home Three Hero Active */
    var heroThreeActive = new Swiper(".heroThreeActive", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 7000,
        },
        pagination: {
            el: ".hero-three-pagination",
            clickable: true,
        },
    });
    /* Service Slide Active */
    var serviceSlideActive = new Swiper(".serviceSlideActive", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".dots-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    /* Case Studies Active */
    var caseStudiesActive = new Swiper(".caseStudiesActive", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".dots-pagination",
            clickable: true,
        },
        breakpoints: {
            1700: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    /* Team Slide Active */
    var teamSlideActive = new Swiper(".teamSlideActive", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".dots-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    /* Team Two Slide Active */
    var teamTwoSlideActive = new Swiper(".teamTwoSlideActive", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".dots-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    /* Team Three Slide Active */
    var teamThreeSlideActive = new Swiper(".teamThreeSlideActive", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".dots-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    /* Testimonial Active */
    var testimonialActive = new Swiper(".testimonialActive", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        loop: false,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".testimonial-navigation-next",
            prevEl: ".testimonial-navigation-prev",
        },
    });
    /* Brand Activation*/
    var brandActivation = new Swiper(".brandActivation", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: true,
        breakpoints: {
            1400: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 6,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 3,
            },
        },
    });

    /* Post Slider Activation */
    var postSliderActivation = new Swiper(".postSliderActivation", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".bd-post-slider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".post-navigation-next",
            prevEl: ".post-navigation-prev",
        },
    });

    /* Product Slider Thumbs */
    var swiper = new Swiper(".productSliderThumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    /* Product Main Slider */
    var swiper2 = new Swiper(".productMainSlider", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".product-button-next",
            prevEl: ".product-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    /* Related Products Slide */
    var relatedProductsSlide = new Swiper(".relatedProductsSlide", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        allowTouchMove: true,
        observer: true,
        pagination: {
            el: ".slider-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            451: {
                slidesPerView: 2,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 4,
            },
        },
    });

    /* All Swiper Slider Activation End */

    /* process activation Js */
    $(document).on('mouseover', '.bd-process-timeline-item', function () {
        $('.bd-process-timeline-item.active').removeClass('active');
        $(this).addClass('active');
    });
    /* service activation Js */
    $(document).on('mouseover', '.bd-case-studies-item', function () {
        $('.bd-case-studies-item.active').removeClass('active');
        $(this).addClass('active');
    });

    /* pricing plan price change js */
    document.addEventListener("DOMContentLoaded", function () {
        const yearlyBtn = document.querySelector('.yearly-plan-btn');
        const monthlyBtn = document.querySelector('.monthly-plan-btn');
        const yearlyPricing = document.querySelectorAll('.monthly-pricing');
        const monthlyPricing = document.querySelectorAll('.yearly-pricing');
        if (yearlyBtn && monthlyBtn) {
            /* Show Yearly Pricing */
            yearlyBtn.addEventListener('click', function () {
                yearlyBtn.classList.add('active');
                monthlyBtn.classList.remove('active');
                yearlyPricing.forEach(el => (el.style.display = 'none'));
                monthlyPricing.forEach(el => (el.style.display = 'block'));
            });

            /* Show Monthly Pricing */
            monthlyBtn.addEventListener('click', function () {
                monthlyBtn.classList.add('active');
                yearlyBtn.classList.remove('active');
                yearlyPricing.forEach(el => (el.style.display = 'block'));
                monthlyPricing.forEach(el => (el.style.display = 'none'));
            });
        }
    });

    /* Isotope start */
    $('.grid').imagesLoaded(function () {
        /* init Isotope */
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });

        /* filter items on button click */
        $('.bd-filter-btn').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        /* for menu active class */
        $('.bd-filter-btn button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    /* Isotope end */

    /* Set your launch date here (YYYY-MM-DDTHH:MM:SS) */
    const launchDate = new Date("2027-08-05T00:00:00").getTime();
    const countdownTimer = document.querySelector('.countdown-timer');
    if (countdownTimer) {
        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            if (distance < 0) {
                clearInterval(countdown);
                countdownTimer.innerHTML = "<strong>Launched!</strong>";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const daysEl = document.getElementById("days");
            const hoursEl = document.getElementById("hours");
            const minutesEl = document.getElementById("minutes");
            const secondsEl = document.getElementById("seconds");

            if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, '0');
            if (secondsEl) secondsEl.innerText = seconds.toString().padStart(2, '0');
        }, 1000);
    }

    /* Enable tooltips */
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    /* slider-rang js */
    var slider1 = document.getElementById('slider-range'); // Changed variable name to slider1
    var minValue = 0;
    var maxValue = 2500;
    if ($("#slider-range").length) {
        noUiSlider.create(slider1, {
            start: [0, 1100],
            connect: true,
            range: {
                'min': minValue,
                'max': maxValue
            }
        });

        var amount1 = document.getElementById('amount'); // Changed variable name to amount1
        slider1.noUiSlider.on('update', function (values, handle) {
            amount1.value = "$" + values[0] + " - $" + values[1];
        });

        $('#filter-btn').on('click', function () {
            $('.filter-widget').slideToggle(1000);
        });
    }

    /* Quantity Incases */
    $(document).ready(function () {
        $(".increase").on("click", function () {
            if ($(this).prev().val() < 999) {
                $(this)
                    .prev()
                    .val(+$(this).prev().val() + 1);
            }
        });
        $(".decrease").on("click", function () {
            if ($(this).next().val() > 0) {
                if ($(this).next().val() > 0)
                    $(this)
                        .next()
                        .val(+$(this).next().val() - 1);
            }
        });
    });

    /* Show Coupon Toggle Js */
    $('.bd-checkout-coupon-form-reveal-btn').on('click', function () {
        $('#checkoutCouponForm').slideToggle(400);
    });

    /* checkout-payment-item */
    $('.bd-checkout-payment-item label').on('click', function () {
        $(this).siblings('.bd-checkout-payment-desc').slideToggle(400);
    });

})(jQuery);