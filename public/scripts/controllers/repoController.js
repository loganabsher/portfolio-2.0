'use strict';
// hides anything other than the repo div, changes the title tag to repositories
(function(module){
  // scopes the function to a single variable cutting down exess use of names
  const repoController = {};
  // the function called by the page route "/repositories"
  repoController.init = function(){
    $('#home').hide();
    $('#about').hide();
    $('title').html('Repositories');
    $('#repo').fadeIn('slow');
  }
  // adds an escape from the IFFY function
  module.repoController = repoController;
})(window);
