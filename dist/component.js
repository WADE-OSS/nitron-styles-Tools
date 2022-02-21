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
    font-weight: {{weight}};
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
    display: {{display}};
    background-color:{{bg}};
  `,
  props:{
    m:"0"
  }
});

styles.component('card',{
  el:"div",
  style:`
    border-radius: 7px;
    display: {{display}};
    min-width: {{width}};
    width: {{width}};
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  `,
  props:{
    width:"270px",
    display:"inline-block"
  }
});

styles.component('button',{
  el:"a",
  style:`
    margin-top: 15px;
    font-size: 15px;
    border-radius: 4px;
    display: {{display}};
    max-width: 100%;
    padding: 5px 14px 7px 14px;
    background-color: #3B82F6;
    color: #fff;
    text-decoration:none;
    line-height: normal;
  `,
  props:{
    display:"inline-block"
  }
});

styles.component('container',{
  el:"div",
  style:`
    padding-top: {{top}};
    padding-right: {{right}};
    padding-bottom: {{bottom}};
    padding-left: {{left}};
    padding-top: {{y}};
    padding-bottom: {{y}};
    padding-left: {{x}};
    padding-right: {{x}};
  `,
  props:{
    x:"17%",
    y:"120px"
  }
});
