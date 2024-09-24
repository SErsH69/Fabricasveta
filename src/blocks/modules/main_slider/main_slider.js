import $ from 'jquery';
import 'slick-carousel';

const MainSlider = class MainSlider {
    constructor() {}
    initSlides() {
        $('.js_slides').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    };
    initPrevs() {
        $('.js_prevs').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            dots: true,
        });
    };
    initNumber() {
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('increase') || event.target.classList.contains('decrease')) {
              const button = event.target;
              const quantityInput = button.parentElement.querySelector('.quantity');
          
              let currentValue = parseInt(quantityInput.value, 10);
          
              if (button.classList.contains('increase')) {
                quantityInput.value = currentValue + 1;
              } else if (button.classList.contains('decrease')) {
                if (currentValue > 1) {
                  quantityInput.value = currentValue - 1;
                }
              }
            }
        });
    };
    init() {
        this.initSlides();
        this.initPrevs();
        this.initNumber();
    }
}

export default MainSlider;