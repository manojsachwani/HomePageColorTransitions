$(document).ready(function(){
    str = tinycolor.random().darken(20);
    str2 = tinycolor(str.toHexString()).darken(30);
    $("body").css("background-color", str.toHexString());
    $("div.menu").css("background-color", str2.toHexString());
    setInterval(function(event){
      str = tinycolor.random().darken(15);
      str2 = tinycolor(str.toHexString()).darken(30);
      $("body").css("background-color", str.toHexString());
      $("div.menu").css("background-color", str2.toHexString());
    },1500);
  });