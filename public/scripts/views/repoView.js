'use strict';
(function(module){
  // creating a constant variable that holds all functions
  const repoView = {}

  // --Home/Experience Page Functions--


  // --Repository Page Functions--
  repoView.populateFilters = function(){
    $('article').each(function(){
      // if(!$(this).hasClass(''))
      let tag = $(this).find()
      $('#name-filter').append()
    });
  }();


  // --About Page Functions--
  repoView.copyEmail = function(){
    $('#email-link').on('click', function(){
      console.log('email coppied');
    });
  }();

  repoView.copyPhone = function(){
    $('#phone-link').on('click', function() {
      console.log('phone coppied');
    });
  }();
  repoView.showYoutube = function(){
    $('#play-youtube').on('click', function(){
      console.log('shown youtube');
    });
  }();
  // passing all functions out of the enclosing function through the module parameter
  module.repoView = repoView;
})(window);
