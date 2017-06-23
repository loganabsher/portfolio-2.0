'use strict';
// hides anything other than the about div, changes the title tag to about
(function(module){
  // scopes the function to a single variable cutting down exess use of names
  const aboutController = {};
  // the function called by the page route "/about"
  aboutController.init = function(){
    $('#home').hide();
    $('#repo').hide();
    $('title').html('About')
    $('#about').fadeIn('slow');
  }
  // adds an escape from the IFFY function
  module.aboutController = aboutController;
})(window);
