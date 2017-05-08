'use strict'

// this is a repository constructor as well as a host for all functions and variables in this js file
function Repository(data){
  this.name = data.name;
  this.forks = data.forks;
  this.watchers = data.watchers;
  this.size = data.size;
  this.created_at = data.created_at;
  this.days_ago = data.created_at;
};

// variable declarations:
Repository.all = [];
Repository.gitHub = 'https://api.github.com/';
Repository.githubRepo = 'user/repos?type=owner';
Repository.gitHubToken = '02d543f3edfb2834a435984d74f82ba72c720d14';

// appends anything in the Repository.all array using the handlebars template to the #repo <div>
Repository.toHtml = function(){
  let template = Handlebars.compile($('#repo-template').html());
  Repository.all.forEach(function(ele){
    $('#repo').append(template(ele));
  })
}

// calculates how long ago the repository was created
Repository.daysAgo = (created) => parseInt((new Date() - new Date(created))/24/60/60/1000);

// gets branch data from each repository and adds it to the already existing html
Repository.fetchBranches = function(){
  Repository.all.forEach(function(ele){
    $.getJSON({
      method: 'GET',
      url: `${Repository.gitHub}repos/loganabsher/${ele.name}/branches`,
      headers: {
        Authorization: 'token ' + Repository.gitHubToken
      }
    }).then(function(data){
      let branch = $('#' + ele.name).find('.branch');
      data.forEach(function(branches){
        // console.log($('branches.commit.url'));
        // $('branches.commit.url').remove('api.');
        // console.log(branches.commit.url);
        $(branch).append(`<p><a href="${branches.commit.url}">${branches.name}</a></p>`);
      })
    })
  })
}

// uses a getJSON call and a access token to get my personal repos from github's api
Repository.initRepos = function(){
  $.getJSON({
    method: 'GET',
    url: Repository.gitHub + Repository.githubRepo,
    headers: {
      Authorization: 'token ' + Repository.gitHubToken
    }
  }).then(function(data){
    data.forEach(function(ele){
      Repository.all.push(new Repository(ele));
    })
  }).then(function(){
    localStorage.setItem('all', Repository.all);
  })
};

// checks local storage and sees if the data is up to date, if not a new initRepos call is called and replaces local storage
Repository.check = function(){
  $.getJSON({
    method: 'GET',
    url: Repository.gitHub + Repository.githubRepo,
    headers: {
      Authorization: 'token ' + Repository.gitHubToken
    }
  }).then(function(data){
    console.log((JSON.parse(localStorage.all.length) + 1) / 16);
    console.log(data.length);
    if(localStorage.all){
      Repository.all = JSON.parse(localStorage.all);
    }
    else{
      Repository.initRepos();
    }
  }).then(
  () => Repository.toHtml()).then(
  () => Repository.fetchBranches())
}();
