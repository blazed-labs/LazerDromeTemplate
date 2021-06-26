/* The Blazed Stardard JS Library */



class BlazedNavElement extends 	HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here

  }
}


customElements.define('blz-nav', BlazedNavElement, { extends: 'nav' });