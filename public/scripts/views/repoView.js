'use strict';
(function(module){
  // creating a constant variable that holds all functions
  const repoView = {}

  repoView.populateFilters = function(){
    $('article').each(function(){
      // if(!$(this).hasClass(''))
      let tag = $(this).find()
      $('#name-filter').append()
    });
  }();



  // passing all functions out of the enclosing function through the module parameter
  module.repoView = repoView;
})(window);
