'use strict';
(function(module){
const homeController = {};
homeController.init = function(){
  $('#repo').hide();
  $('#about').hide();
  $('#home').fadeIn('slow');
}
module.homeController = homeController;
})(window);
