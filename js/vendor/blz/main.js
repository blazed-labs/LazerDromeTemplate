/* The Blazed Stardard JS Library */

/* Toggle visibility */

function mx(item){
  var i = document.getElementById(item);
  if(i.style.display == 'block'){
    i.style.display = 'none';
  } else {
    i.style.display = 'block';
  }
}


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