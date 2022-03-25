$(document).ready(function() {
    "use strict";

    // Sliders;

    function activeSlickSlide(className, timeDue) {
        setTimeout(() => {
            $(className).slick({
                autoplay: true,
                arrows: false,
                dots: false,
                slidesToShow: 3,
                draggable: false,
                infinite: true,
                pauseOnHover: false,
                swipe: true,
                touchMove: false,
                vertical: true,
                speed: 1000,
                autoplaySpeed: 2000,
                useTransform: true,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                adaptiveHeight: true,
              });
        }, timeDue);
    }

    activeSlickSlide('.slide-set-1', 0);
    activeSlickSlide('.slide-set-2', 500);
    activeSlickSlide('.slide-set-3', 0);
    activeSlickSlide('.slide-set-4', 500);

    // Popup video;
    new VenoBox({
        selector: ".my-video-links"
    });

});