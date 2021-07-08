/* 
    blz/main.js
    The Blazed Stardard JS Library
*/

/* Toggle visibility */

function addBurger(){
  var blz_nav = document.getElementsByTagName("BLZ-NAV")[0];
  if(blz_nav !== undefined){
      var menuId = blz_nav.getAttribute("menu");
      var label = document.createElement("label");
      label.setAttribute("id", "burger");
      label.setAttribute("for", "nav-check");
      label.addEventListener("mouseup", function(){
        var i = document.getElementById(menuId);
        if(i.style.display == 'block'){
          i.style.display = 'none';
        } else {
          i.style.display = 'block';
        }
      });
      // Element functionality written in here
      var check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      check.setAttribute("id", "nav-check");
      var span_1 = document.createElement("span");
      var span_2 = document.createElement("span");
      var span_3 = document.createElement("span");
    
      label.appendChild(check);
      label.appendChild(span_1);
      label.appendChild(span_2);
      label.appendChild(span_3);
    
      var mm = document.getElementById(menuId);
      blz_nav.insertBefore(label, mm);
  }
}
document.body.onload = addBurger;


class BlazedNavElement extends 	HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

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