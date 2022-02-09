customElements.define('dom-text', class extends HTMLElement {
  connectedCallback() {
    var TextClass = "margin: 0;";
    if(this.getAttribute('size')){
      TextClass += `font-size:${this.getAttribute('size')};`
    }else{
      TextClass += 'font-size: 18px;'
    };
    if(this.getAttribute('color')){
      TextClass += this.getAttribute('color');
    };
    if(this.getAttribute('m')){
      TextClass += `margin: ${this.getAttribute('m')};`
    };
    if(this.getAttribute('mt')){
      TextClass += `margin-top: ${this.getAttribute('mt')};`
    };
    if(this.getAttribute('mb')){
      TextClass += `margin-bottom: ${this.getAttribute('mb')};`
    };
    if(this.getAttribute('ml')){
      TextClass += `margin-left: ${this.getAttribute('ml')};`
    };
    if(this.getAttribute('mr')){
      TextClass += `margin-right: ${this.getAttribute('mr')};`
    };
    if(this.getAttribute('mx')){
      TextClass += `margin-left: ${this.getAttribute('mx')}; margin-right: ${this.getAttribute('mx')};`
    };
    if(this.getAttribute('my')){
      TextClass += `margin-top: ${this.getAttribute('my')}; margin-bottom: ${this.getAttribute('my')};`
    };
    if(this.getAttribute('p')){
      TextClass += `padding: ${this.getAttribute('p')};`
    };
    if(this.getAttribute('pt')){
      TextClass += `padding-top: ${this.getAttribute('pt')};`
    };
    if(this.getAttribute('pb')){
      TextClass += `padding-bottop: ${this.getAttribute('pb')};`
    };
    if(this.getAttribute('pl')){
      TextClass += `padding-left: ${this.getAttribute('pl')};`
    };
    if(this.getAttribute('pr')){
      TextClass += `padding-right: ${this.getAttribute('pr')};`
    };
    if(this.getAttribute('px')){
      TextClass += `padding-left: ${this.getAttribute('px')}; padding-right: ${this.getAttribute('px')};`
    };
    if(this.getAttribute('py')){
      TextClass += `padding-top: ${this.getAttribute('py')}; padding-bottop: ${this.getAttribute('py')};`
    };
    if(this.getAttribute('style')){
      TextClass += this.getAttribute('style')
    };
    this.outerHTML = `<p class="${styles(TextClass)}">${this.innerHTML}</p>`
  };
});

customElements.define('dom-box', class extends HTMLElement {
  connectedCallback() {
    var TextClass = "margin: 0;";
    if(this.getAttribute('color')){
      TextClass += this.getAttribute('color');
    };
    if(this.getAttribute('m')){
      TextClass += `margin: ${this.getAttribute('m')};`
    };
    if(this.getAttribute('mt')){
      TextClass += `margin-top: ${this.getAttribute('mt')};`
    };
    if(this.getAttribute('mb')){
      TextClass += `margin-bottom: ${this.getAttribute('mb')};`
    };
    if(this.getAttribute('ml')){
      TextClass += `margin-left: ${this.getAttribute('ml')};`
    };
    if(this.getAttribute('mr')){
      TextClass += `margin-right: ${this.getAttribute('mr')};`
    };
    if(this.getAttribute('mx')){
      TextClass += `margin-left: ${this.getAttribute('mx')}; margin-right: ${this.getAttribute('mx')};`
    };
    if(this.getAttribute('my')){
      TextClass += `margin-top: ${this.getAttribute('my')}; margin-bottom: ${this.getAttribute('my')};`
    };
    if(this.getAttribute('p')){
      TextClass += `padding: ${this.getAttribute('p')};`
    };
    if(this.getAttribute('pt')){
      TextClass += `padding-top: ${this.getAttribute('pt')};`
    };
    if(this.getAttribute('pb')){
      TextClass += `padding-bottop: ${this.getAttribute('pb')};`
    };
    if(this.getAttribute('pl')){
      TextClass += `padding-left: ${this.getAttribute('pl')};`
    };
    if(this.getAttribute('pr')){
      TextClass += `padding-right: ${this.getAttribute('pr')};`
    };
    if(this.getAttribute('px')){
      TextClass += `padding-left: ${this.getAttribute('px')}; padding-right: ${this.getAttribute('px')};`
    };
    if(this.getAttribute('py')){
      TextClass += `padding-top: ${this.getAttribute('py')}; padding-bottop: ${this.getAttribute('py')};`
    };
    if(this.getAttribute('py')){
      TextClass += `padding-top: ${this.getAttribute('py')}; padding-bottop: ${this.getAttribute('py')};`
    };
    if(this.getAttribute('width')){
      TextClass += `width: ${this.getAttribute('width')};`
    };
    if(this.getAttribute('height')){
      TextClass += `height: ${this.getAttribute('height')};`
    };
    if(this.getAttribute('style')){
      TextClass += this.getAttribute('style')
    };
    this.outerHTML = `<div class="${styles(TextClass)}">${this.innerHTML}</div>`
  };
});
customElements.define('dom-layout', class extends HTMLElement {
  connectedCallback() {
    var TextClass = "margin: 0;";
    if(this.getAttribute('color')){
      TextClass += this.getAttribute('color');
    };
    if(this.getAttribute('m')){
      TextClass += `margin: ${this.getAttribute('m')};`
    };
    if(this.getAttribute('mt')){
      TextClass += `margin-top: ${this.getAttribute('mt')};`
    };
    if(this.getAttribute('mb')){
      TextClass += `margin-bottom: ${this.getAttribute('mb')};`
    };
    if(this.getAttribute('ml')){
      TextClass += `margin-left: ${this.getAttribute('ml')};`
    };
    if(this.getAttribute('mr')){
      TextClass += `margin-right: ${this.getAttribute('mr')};`
    };
    if(this.getAttribute('mx')){
      TextClass += `margin-left: ${this.getAttribute('mx')}; margin-right: ${this.getAttribute('mx')};`
    };
    if(this.getAttribute('my')){
      TextClass += `margin-top: ${this.getAttribute('my')}; margin-bottom: ${this.getAttribute('my')};`
    };
    if(this.getAttribute('p')){
      TextClass += `padding: ${this.getAttribute('p')};`
    };
    if(this.getAttribute('pt')){
      TextClass += `padding-top: ${this.getAttribute('pt')};`
    };
    if(this.getAttribute('pb')){
      TextClass += `padding-bottop: ${this.getAttribute('pb')};`
    };
    if(this.getAttribute('pl')){
      TextClass += `padding-left: ${this.getAttribute('pl')};`
    };
    if(this.getAttribute('pr')){
      TextClass += `padding-right: ${this.getAttribute('pr')};`
    };
    if(this.getAttribute('px')){
      TextClass += `padding-left: ${this.getAttribute('px')}; padding-right: ${this.getAttribute('px')};`
    };
    if(this.getAttribute('py')){
      TextClass += `padding-top: ${this.getAttribute('py')}; padding-bottop: ${this.getAttribute('py')};`
    };
    if(this.getAttribute('py')){
      TextClass += `padding-top: ${this.getAttribute('py')}; padding-bottop: ${this.getAttribute('py')};`
    };
    if(this.getAttribute('width')){
      TextClass += `width: ${this.getAttribute('width')};`
    };
    if(this.getAttribute('height')){
      TextClass += `height: ${this.getAttribute('height')};`
    };
    if(this.getAttribute('type')){
      TextClass += `display: ${this.getAttribute('type')};`
    };
    if(this.getAttribute('style')){
      TextClass += this.getAttribute('style')
    };
    this.outerHTML = `<div class="${styles(TextClass)}">${this.innerHTML}</div>`
  };
});
