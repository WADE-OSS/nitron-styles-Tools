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
    customElements.define(componentName, class extends HTMLElement {
      connectedCallback() {
        if(ComponentOptions.el){
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
          let className = `${elementName.replace('-',"_")}__`;
          let props = {};
          for (let i = 0; i < 8; i++) {
            const rnum = Math.floor(Math.random() * chars.length)
            className += chars.substring(rnum, rnum + 1)
          };
          if(this.getAttributeNames()) {
            const AttrNames = this.getAttributeNames();
            let optionsreturn = ComponentOptions.style;
            AttrNames.forEach(attr => {
              if(optionsreturn.match(new RegExp(`\{\{ ?${attr} ?\}\}`,"g"))){
                let val = this.getAttribute(attr);
                optionsreturn = optionsreturn.replace(new RegExp(`\{\{ ?${attr} ?\}\}`,"g"), val);
              }else{
                Object.assign(props,{class:className});
                if(props[attr]){
                  props[attr] += ` ${this.getAttribute(attr)}`;
                }else{
                  props[attr] = `${this.getAttribute(attr)}`;
                };
              };
            });
            ComponentOptions.style = optionsreturn;
          }
          if(ComponentOptions.props){
            Object.keys(ComponentOptions.props).forEach(x => {
              ComponentOptions.style = ComponentOptions.style.replace(new RegExp(`\{\{ ?${x} ?\}\}`,"g"), ComponentOptions.props[x]);
            });
          };
          nitron.styles(`.${className}`,ComponentOptions.style);
          this.outerHTML = nitron.createElement(ComponentOptions.el,props,this.innerHTML);
        };
      };
    });
  };
};

const styles = new NitronStyles();
