'use strict';
// hides anything other than the home div, changes the title tag to home
(function(module){
  // scopes the function to a single variable cutting down exess use of names
  const homeController = {};
  // the function called by the page route "/"
  homeController.init = function(){
    $('#repo').hide();
    $('#about').hide();
    $('title').html('Home');
    $('#home').fadeIn('slow');
  }
  // adds an escape from the IFFY function
  module.homeController = homeController;
})(window);
