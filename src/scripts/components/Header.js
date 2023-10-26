/** Composante Header */
export default class Header {
  /**
   * @param {HTMLElement} element - contient l'élément html contenant le data-component Header
   */
  constructor(element) {
    this.element = element;
    /**
     * Regarde s'il y a une valeur dans data scroll limit sinon prend la valeur de 0.1
     */
    this.scrollLimit =
      parseFloat(this.element.getAttribute('data-scroll-limit')) || 0.1;

    this.scrollPosition = 0;
    this.lastScrollPostion = 0;
    this.html = document.documentElement;
    this.body = document.body;
    // initalise la composante Header
    this.init();
    this.initNavMobile();
  }
  /**
   * ajoute un écouteur d'événement pour le scroll de la fenêtre
   */
  init() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  /**
   * Met à jour la position de défilement de la page et vérifie si la position atteint une limite spécifiée
   * @param {event} event - La barre de scroll
   */
  onScroll(event) {
    this.lastScrollPostion = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;
    this.setHeaderState();
    this.setDirectionState();
  }

  /**
   * Vérifie si le header se cache ou ne cache pas
   */
  setHeaderState() {
    const scrollHeight = document.scrollingElement.scrollHeight;

    if (
      this.scrollPosition > scrollHeight * this.scrollLimit &&
      !this.element.hasAttribute('data-not-hiding')
    ) {
      this.html.classList.add('header-is-hidden');
    } else {
      this.html.classList.remove('header-is-hidden');
    }
  }

  /**
   * Vérifie si la direction du défilement est vers le haut ou vers le bas
   */
  setDirectionState() {
    if (this.scrollPosition >= this.lastScrollPostion) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }
  /**
   * Initialise l'écouteur d'événements pour le bouton de basculement de la navigation mobile
   */
  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');

    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }
  /**
   * Ajoute ou supprime les classes CSS pour ouvrir ou fermer le menu mobile.
   */
  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
    this.body.classList.toggle('body-menu');
  }
}
