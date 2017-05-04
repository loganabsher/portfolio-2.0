'use strict';
(function(module){
const repoController = {};
repoController.init = function(){
  $('#home').hide();
  $('#about').hide();
  $('#repo').fadeIn('slow');
}
module.repoController = repoController;
})(window);
