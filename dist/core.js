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
          for (let i = 0; i < 8; i++) {
            const rnum = Math.floor(Math.random() * chars.length)
            className += chars.substring(rnum, rnum + 1)
          };
          nitron.styles(`.${className}`,ComponentOptions.style);
          this.outerHTML = nitron.createElement(ComponentOptions.el,{class:className},"오......");

        };
      };
    });
  };
};

const styles = new NitronStyles();
