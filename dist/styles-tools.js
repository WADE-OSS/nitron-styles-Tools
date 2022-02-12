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

const nitron_styleTools_container = styles({
  style:`
      padding-left: 20%;
      padding-right: 20%;
  `,
  media:{
      size:"max-width: 790px",
      style:`
      padding-left: 7%;
      padding-right: 7%;
      display: block;
      `
      }
});

nitron.component('container',{
  change:{
    el:"div",
    class:`${nitron_styleTools_container}`
  }
});

const nitron_styleTools_card = styles(`
  border-radius: 4px;
  display: inline-block;
  min-width: 270px;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`);

nitron.component('card',{
  change:{
    el:"div",
    class:`${nitron_styleTools_card}`
  }
});
