'use strict';
(function(module){
const homeController = {};
homeController.init = function(){
  $('#repo').hide();
  $('#about').hide();
  $('title').html('Home');
  $('#home').fadeIn('slow');
}
module.homeController = homeController;
})(window);
