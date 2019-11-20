'use strict';

let img_path;

function backgroundModifier(){
  var elem = document.getElementById("style");
  console.log(document.cookie);
  img_path = getCookieValue("bckg_path");
  console.log(img_path);
  elem.innerHTML = "html {margin:0;padding:0;background:url(" + img_path +") no-repeat center fixed;-webkit-background-size: cover;background-size: cover;}"
  console.log(document.body.style.backgroundImage);
};

function getIndexName(cname,cook){
  var toSearch =cname +"=";
  var i = 0;
  var begin_chaine = 0;
  while (i<cook.length){
      if(cook[i] == "="){
          var str = cook.substr(begin_chaine,i+1);
          if(toSearch == str){
              return i;
          }
      }
      if(cook[i] == ";"){
        begin_chaine = i+1;
      }
      i += 1;
  }
  return -1;
}

function getCookieValue(cname){
  const cook = document.cookie;
  var ind = getIndexName(cname,cook);
  var i = ind;
  var j = 0;
  while(j == 0 && i<cook.length){
    if(cook[i] == ";"){
      j = i;
    }
    i = i+1;
  }
  j=i
  return cook.substr(ind+1,j);
}