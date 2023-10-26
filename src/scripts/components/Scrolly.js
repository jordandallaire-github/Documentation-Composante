/** Composante Scrolly */
export default class Scrolly {
  /**
   * @param {HTMLElement} element - contient l'élément html contenant le data-component Scrolly
   */
  constructor(element) {
    this.element = element;
    this.options = {
      rootMargin: '0px 0px 0px 0px',
    };

    // initalise la composante Scrolly
    this.init();
  }

  /**
   *  Initialise la composante Scrolly en créant un nouvel objet IntersectionObserver
   */
  init() {
    const observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    );

    // observe tous les éléments enfants de l'élément passé en paramètre qui contient l'attribut "data-scrolly".
    const items = this.element.querySelectorAll('[data-scrolly]');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      observer.observe(item);
    }
  }

  /**
   * Appelée chaque fois qu'un élément observé entre ou sort de la zone visible de l'écran.
   * @param {Array} entries - Décrit chaque élément observé et son état d'intersection avec la zone root margin
   * @param {Object} observer -Objet qui contient les méthodes et propriétés nécessaires pour observer les éléments cibles et agir en conséquence lorsqu'un changement est détecté.
   */

  watch(entries, observer) {
    console.log(observer);
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;
      // Si la classe observe un élément ayant un data-no-repeat arrête d'observer l'élément
      if (entry.isIntersecting) {
        target.classList.add('is-active');
        if (target.dataset.noRepeat !== undefined) {
          observer.unobserve(target);
        }
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}
