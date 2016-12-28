"use strict";
(function(){

  console.log('helloooo');

  $('.projectBack').hover(function(){
    $(this).find('img').fadeTo(200, 0.5);
    $(this).find('p').fadeTo(200, 1);
  }, function(){
    $(this).find('img').fadeTo(200, 1);
    $(this).find('p').fadeTo(200, 0)
  })





})();






