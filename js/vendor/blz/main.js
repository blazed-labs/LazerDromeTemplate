/* The Blazed Stardard JS Library */


class BlazedNavElement extends 	HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here

  }
}

class BlazedHeroElement extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here

  }
}

class BlazedGridElement extends	HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here

  }
}

class BlazedFormElement extends HTMLFormElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here

  }
}

class BlazedFieldElement extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here

  }
}


customElements.define('blz-nav', BlazedNavElement, { extends: 'nav' });
customElements.define('blz-grid', BlazedGridElement, { extends: 'div' });
customElements.define('blz-hero', BlazedHeroElement, { extends: 'div' });
customElements.define('blz-form', BlazedFormElement, { extends: 'form' });
customElements.define('blz-field',BlazedFieldElement, { extends: 'div' });