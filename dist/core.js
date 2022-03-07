/*
 * Nitron.js v0.0.3 - core
 *
 * (c) 2022 WADE Open Source Software and Nitron Team. and its affiliates.
 * Released under the MIT License.
 * https://github.com/WADE-OSS/nitron-styles-Tools/blob/main/LICENSE
 */


class NitronStyles {
  constructor() {};

  // Styles Component
  component(elementName, ComponentOptions){
    let componentName = "";
    if(elementName.includes('-')){
      componentName = elementName
    }else{
      componentName = `dom-${elementName}`
    };

    // There is a fatal bug where you cannot use the same component multiple times (#5) : resolved
    customElements.define(componentName, class extends HTMLElement {
      connectedCallback() {
        if(ComponentOptions.el){
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
        let className = `${elementName.replace('-',"_")}__`;
        let componentStyles = ComponentOptions.style;
        let props = {};
        for (let i = 0; i < 8; i++) {
            const rnum = Math.floor(Math.random() * chars.length)
            className += chars.substring(rnum, rnum + 1)
        };
        Object.assign(props,{class:className});
        if(this.getAttributeNames()) {  
          const AttrNames = this.getAttributeNames();
          AttrNames.forEach(attr => {
            if(componentStyles.match(new RegExp(`\{\{ ?${attr} ?\}\}`,"g"))){
                let val = this.getAttribute(attr);
                componentStyles = componentStyles.replace(new RegExp(`\{\{ ?${attr} ?\}\}`,"g"),val);
            }else{
                if(props[attr]){
                props[attr] += ` ${this.getAttribute(attr)}`;
                }else{
                props[attr] = `${this.getAttribute(attr)}`;
                };
            };
          });
        };
        if(ComponentOptions.event){
          Object.keys(ComponentOptions.event).forEach(x => {
            nitron.styles(`.${className}:${x}`,ComponentOptions.event[x]);
          });
        };
        if(ComponentOptions.media){
          Object.keys(ComponentOptions.media).forEach(x => {
            let mediaquery = window.matchMedia(`screen and (${x})`);
            mediaquery.addListener((a) => {
              if(a.matches === true){
                nitron.styles(`.${className}`,ComponentOptions.media[x]);
              }else{
                nitron.styles(`.${className}`,componentStyles);
              };
            });
          });
        };
        if(ComponentOptions.props){
            Object.keys(ComponentOptions.props).forEach(x => {
            componentStyles = componentStyles.replace(new RegExp(`\{\{ ?${x} ?\}\}`,"g"), ComponentOptions.props[x]);
            });
        };
        nitron.styles(`.${className}`,componentStyles);
        this.outerHTML = nitron.createElement(ComponentOptions.el,props,this.innerHTML);
        };
      };
    });
  };
};

const styles = new NitronStyles();
