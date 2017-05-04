'use strict';
(function(module){
const aboutController = {};
aboutController.init = function(){
  $('#home').hide();
  $('#repo').hide();
  $('#about').fadeIn('slow');
}
module.aboutController = aboutController;
})(window);
