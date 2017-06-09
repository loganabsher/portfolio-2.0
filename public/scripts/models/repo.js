'use strict'

// this is a repository constructor as well as a host for all functions and variables in this js file
function Repository(data){
  this.name = data.name;
  this.forks = data.forks;
  this.watchers = data.watchers;
  this.size = data.size;
  this.created_at = data.created_at;
  this.days_ago = data.created_at;
  this.update_at = data.updataed_at;
};

// variable declarations:
Repository.all = [];
Repository.gitHub = 'https://api.github.com/';
Repository.githubRepo = 'user/repos?type=owner';
Repository.gitHubToken = 'eb203871b8e045aabe542645589c513cce07a768';

// calculates how long ago the repository was created
Repository.daysAgo = (created) => parseInt((new Date() - new Date(created))/24/60/60/1000);

// appends anything in the Repository.all array using the handlebars template to the #repo <div>
Repository.toHtml = function(){
  let template = Handlebars.compile($('#repo-template').html());
  Repository.all.forEach((ele) => $('#repo').append(template(ele)));
}

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
      console.log(data);
      Repository.all = JSON.parse(localStorage.all);
      console.log(Repository.all);
      data.forEach(function(ele){
        
      })
    });
  }
}();

// // gets branch data from each repository and adds it to the already existing html
// Repository.fetchBranches = function(){
//   Repository.all.forEach(function(ele){
//     $.getJSON({
//       method: 'GET',
//       url: `${Repository.gitHub}repos/loganabsher/${ele.name}/branches`,
//       headers: {
//         Authorization: 'token ' + Repository.gitHubToken
//       }
//     }).then(function(data){
//       let branch = $('#' + ele.name).find('.branch');
//       data.forEach(function(branches){
//         $(branch).append(`<p><a href="${branches.commit.url}">${branches.name}</a></p>`);
//       })
//     })
//   })
// }
//
// // uses a getJSON call and a access token to get my personal repos from github's api
// Repository.initRepos = function(){
//   $.getJSON({
//     method: 'GET',
//     url: Repository.gitHub + Repository.githubRepo,
//     headers: {
//       Authorization: 'token ' + Repository.gitHubToken
//     }
//   }).then(function(data){
//     data.forEach(function(ele){
//       Repository.all.push(new Repository(ele));
//     })
//     Repository.all.map(function(ele){
//       Repository.daysAgo(ele.created_at);
//     });
//   }).then(() => Repository.toHtml());
// };
//
