'use strict'

// this is a repository constructor as well as a host for all functions and variables in this js file
function Repository(data){
  this.name = data.name;
  this.forks = data.forks;
  this.watchers = data.watchers;
  this.size = data.size;
  this.created_at = data.created_at;
  this.days_ago = data.created_at;
  this.updated_at = data.updated_at;
  this.branches = '';
};

// variable declarations:
Repository.all = [];
Repository.gitHub = 'https://api.github.com/';
Repository.githubRepo = 'user/repos?type=owner';
Repository.gitHubToken = '2025bb7fa1a4a4b45e566722073de8d0498ede55';

// calculates how long ago the repository was created
Repository.daysAgo = (created) => parseInt((new Date() - new Date(created))/24/60/60/1000);

// appends anything in the Repository.all array using the handlebars template to the #repo <div>
Repository.toHtml = function(){
  let template = Handlebars.compile($('#repo-template').html());
  Repository.all.forEach((ele) => $('#repo').append(template(ele)));
};

// uses a getJSON call and a access token to get my personal repos from github's api
// NOTE: instead of doing a fetchrepo and a fetchbranch multiple times loading each page, would it be better to actually host a database containing all information from the getJSON call and then adding the branch information as well, but only as a inital setup, from there it can have a server side checker to make sure the information is up to date.
Repository.fetchRepos = function(){
  Repository.all = [];
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
  }).then(() => Repository.all.map((branchEle) => Repository.fetchBranches(branchEle))).then(
    () => Repository.all.map((daysEle) => daysEle.days_ago = Repository.daysAgo(daysEle.days_ago))).then(
    () => setTimeout(() => Repository.toHtml(), 2000)).then(
    () => localStorage.setItem('all', JSON.stringify(Repository.all)));
};

// gets branch data from each repository and adds it to the already existing html
Repository.fetchBranches = function(ele){
  $.getJSON({
    method: 'GET',
    url: `${Repository.gitHub}repos/loganabsher/${ele.name}/branches`,
    headers: {
      Authorization: 'token ' + Repository.gitHubToken
    }
  }).then(function(data){
    data.forEach(function(branch){
      let name = `<p><a href="${branch.commit.url}">${branch.name}</a></p>`;
      name = name.replace('api.', '');
      name = name.replace('repos/', '');
      ele.branches = ele.branches + name;
    });
  });
};

// checks local storage and sees if the data is up to date, if not a new initRepos call is called and replaces local storage
Repository.check = function(){
  if(localStorage.all){
    $.getJSON({
      method: 'GET',
      url: Repository.gitHub + Repository.githubRepo,
      headers: {
        Authorization: 'token ' + Repository.gitHubToken
      }
    }).then(function(data){
      Repository.all = [];
      Repository.all = JSON.parse(localStorage.all);
      data.forEach(function(ele){
        let i = 0;
        if(ele.updated_at !== Repository.all[i].updated_at){
          localStorage.clear();
          Repository.fetchRepos();
        }
        i++;
      });
    });
  }
  else{
    Repository.fetchRepos();
  }
}();





// --Home/Experience Page Functions--
Repository.singleHtml = function(exp){
  let template = Handlebars.compile($('#experience-template').html());
  $('#home').append(template(exp));
}

Repository.fetchData = function(){
  $.getJSON('data/experienceData.JSON').then(function(rawData){
    rawData.forEach((ele) => Repository.singleHtml(ele));
  });
}();
