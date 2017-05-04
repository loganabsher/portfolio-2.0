'use strict'

function Repository(data){
  this.name = data.name;
  this.forks = data.forks;
  this.watchers = data.watchers;
  this.size = data.size;
  this.created_at = data.created_at;
  this.days_ago = data.created_at;
  this.html_url = data.owner.html_url;
  this.login = data.owner.login;
};

Repository.all = [];

Repository.fetch = function(){
  $.getJSON({
    method: 'GET',
    url: "https://api.github.com/user/repos?type=owner",
    headers: {
      Authorization: `token 2ee5be0789efe0fb9c1d67720f03e522a7113519`
    }
  }).then(
    (data) => data.forEach((ele) => Repository.all.push(new Repository(ele)))).then(
    () => Repository.all.map((ele) => ele.days_ago = parseInt((new Date() - new Date(ele.created_at))/60/60/24/1000))).then(
    () => Repository.toHtml()).then(
    () => Repository.fetchBranches())
}();

Repository.toHtml = function(){
  let template = Handlebars.compile($('#repo-template').html());
  Repository.all.forEach(function(ele){
    $('#repo').append(template(ele));
  })
}

Repository.fetchBranches = function(){
  Repository.all.forEach(function(ele){
    $.getJSON({
      method: 'GET',
      url: `https://api.github.com/repos/loganabsher/${ele.name}/branches`,
      headers: {
        Authorization: `token 2ee5be0789efe0fb9c1d67720f03e522a7113519`
      }
    }).then(function(data){
      console.log(data);
      let branch = $('#' + ele.name).find('.branch');
      data.forEach(function(branches){
        $(branch).append(`<p><a href="${branches.commit.url}">${branches.name}</a></p>`);
      })
    })
  })
}
