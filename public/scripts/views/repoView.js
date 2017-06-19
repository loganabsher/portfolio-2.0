'use strict';
(function(module){
  // creating a constant variable that holds all functions
  const repoView = {}

  // --Home/Experience Page Functions--


  // --Repository Page Functions--
  repoView.populateFilter = function(){
    $('article').each(function(){
      // if(!$(this).hasClass(''))
      let tag = `<option> value="${$(this).attr()}"</option>`;
      console.log(tag);
      $('#name-filter').append(tag);
    });
  }();
  repoView.sortLargest = function(){
    $('#sort-largest').on('click', function(){
      console.log('sorting largest');
    });
  }();
  repoView.sortSmallest = function(){
    $('#sort-smallest').on('click', function(){
      console.log('sorting smallest');
    });
  }();
  repoView.sortNewest = function(){
    $('#sort-newest').on('click', function(){
      console.log('sorting newest');
    });
  }();
  repoView.sortOldest = function(){
    $('#sort-oldest').on('click', function(){
      console.log('sorting odlest');
    })
  }();
  repoView.sortFavorites = function(){
    $('#my-favorites').on('click', function(){
      console.log('sorting favorties');
    })
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
