styles.component('text',{
  el:"p",
  style:`
    font-size: {{size}};
    margin: {{m}};
    margin-top: {{mt}};
    margin-right: {{mr}};
    margin-bottom: {{mb}};
    margin-left: {{ml}};
    margin-top: {{my}};
    margin-bottom: {{my}};
    margin-left: {{mx}};
    margin-right: {{mx}};
    padding: {{p}};
    padding-top: {{pt}};
    padding-right: {{pr}};
    padding-bottom: {{pb}};
    padding-left: {{pl}};
    padding-top: {{py}};
    padding-bottom: {{py}};
    padding-left: {{px}};
    padding-right: {{px}};
  `,
  props:{
    m:"0",
    size:"18px"
  }
});

styles.component('box',{
  el:"div",
  style:`
    margin: {{m}};
    margin-top: {{mt}};
    margin-right: {{mr}};
    margin-bottom: {{mb}};
    margin-left: {{ml}};
    margin-top: {{my}};
    margin-bottom: {{my}};
    margin-left: {{mx}};
    margin-right: {{mx}};
    padding: {{p}};
    padding-top: {{pt}};
    padding-right: {{pr}};
    padding-bottom: {{pb}};
    padding-left: {{pl}};
    padding-top: {{py}};
    padding-bottom: {{py}};
    padding-left: {{px}};
    padding-right: {{px}};
    width: {{width}};
    height: {{height}};
  `,
  props:{
    m:"0"
  }
});

styles.component('card',{
  el:"div",
  style:`
    border-radius: 4px;
    display: {{display}};
    min-width: {{width}};
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  `,
  props:{
    width:"270px",
    display:"inline-block"
  }
});
