'use strict';

const experienceHolder = {};

experienceHolder.toHtml = function(exp){
  let template = Handlebars.compile($('#experience-template').html());
  $('#home').append(template(exp));
}

experienceHolder.fetchData = function(){
  $.getJSON('data/experienceData.JSON').then(function(rawData){
    rawData.forEach(function(ele){
      experienceHolder.toHtml(ele);
      ele.list.forEach(function(ele){
        $.find()
      });
    });
  });
}();
