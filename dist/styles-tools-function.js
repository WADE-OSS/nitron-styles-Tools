function textColor(color){
  if(color == 'primary'){
    color = styles(`color: ${nitron_styleTools_color.primary};`);
  }else if(color == 'secondary'){
    color = styles(`color: ${nitron_styleTools_color.secondary};`);
  }else if(color == 'success'){
    color = styles(`color: ${nitron_styleTools_color.success};`);
  }else if(color == 'danger'){
    color = styles(`color: ${nitron_styleTools_color.danger};`);
  }else if(color == 'warning'){
    color = styles(`color: ${nitron_styleTools_color.warning};`);
  }else if(color == 'light'){
    color = styles(`color: ${nitron_styleTools_color.light};`);
  }else if(color == 'dark'){
    color = styles(`color: ${nitron_styleTools_color.dark};`);
  }
  return color
};

function bgColor(color){
  if(color == 'primary'){
    color = styles(`background-color: ${nitron_styleTools_color.primary};`);
  }else if(color == 'secondary'){
    color = styles(`background-color: ${nitron_styleTools_color.secondary};`);
  }else if(color == 'success'){
    color = styles(`background-color: ${nitron_styleTools_color.success};`);
  }else if(color == 'danger'){
    color = styles(`background-color: ${nitron_styleTools_color.danger};`);
  }else if(color == 'warning'){
    color = styles(`background-color: ${nitron_styleTools_color.warning};`);
  }else if(color == 'light'){
    color = styles(`background-color: ${nitron_styleTools_color.light};`);
  }else if(color == 'dark'){
    color = styles(`background-color: ${nitron_styleTools_color.dark};`);
  }
  return color
};
