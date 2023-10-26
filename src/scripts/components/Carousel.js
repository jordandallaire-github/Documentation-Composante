import Swiper from 'swiper/bundle';
/** Composante Carousel */
export default class Carousel {
  /**
   * @param {HTMLElement} element - contient l'élément html contenant le data-component Carousel
   */
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
      },
    };
    // initalise la composante Carousel
    this.init();
  }
  /**
   * Regarde les options qu'un carousel peut avoir et le créer
   */
  init() {
    this.setOptions();
    new Swiper(this.element, this.options);
  }

  /** Options et paramètres du Carousel  */
  setOptions() {
    this.variant = this.element.dataset.variant;

    if (this.variant == 'split') {
      this.options.slidesPerView = 1.5;
      this.options.breakpoints = {
        768: {
          slidesPerView: 2.5,
        },
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }

    if ('gap' in this.element.dataset) {
      this.options.slidesPerView = 1.5;
      this.options.spaceBetween = 40;
      this.options.breakpoints = {
        768: {
          slidesPerView: 2.5,
        },
      };
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }

    if (this.variant == 'trio') {
      this.options.slidesPerView = 3;
      this.options.spaceBetween;
      this.options.breakpoints = {
        768: {
          spaceBetween: 20,
        },
      };
    }
  }
}
