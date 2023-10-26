import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';

/** Classe primordiale Main */
class Main {
  constructor() {
    // initalise le projet
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    //Crée une instance de ComponentFactory
    new ComponentFactory();
    //Charge les icônes
    Icons.load();
  }
}
//Crée une instance de Main pour lancé le projet
new Main();
