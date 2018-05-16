/*
menuHeight.js
 @getmoremx
 @soycamis
 
You get the top of the menu to give a paddingTop to the sister element,
when the menu is activated the stycky option.
*/
(function() {
  
  window.onload = function() {
      window.onscroll = function(e){
        if(document.querySelector('.site-header').dataset.sticky == "sticky_transparent"){
          if(window.scrollY > 0){
            document.querySelector('.site-header').classList.remove('transparent-bg');
            document.querySelector('#AccessibleNav').classList.remove('transparent-bg');
          }else{
            document.querySelector('.site-header').classList.add('transparent-bg');
            document.querySelector('#AccessibleNav').classList.add('transparent-bg');
         }
      }
    };
  }
})();