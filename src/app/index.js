'use strict';

angular.module('webSite', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        data:{
          css:'app/main/main.css'
        }
      })

      .state('resume',{
        url:'/resume',
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeCtrl',
        data:{
          css:'app/resume/resume.css'
        }
      })

      .state('contact', {
        url:'/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl',
        data:{
          css:'app/contact/contact.css'
        }
      })

      .state('games',{
        url:'/games',
        templateUrl: 'app/games/games.html',
        controller: 'GamesCtrl',
        data:{
          css:'app/games/games.css'
        }
      })

      .state('portfolio',{
        url:'/portfolio',
        templateUrl:'app/portfolio/portfolio.html',
        controller:'PortfolioCtrl',
        data:{
          css:'app/portfolio/portfolio.css'
        }
      });

    $urlRouterProvider.otherwise('/');
  })
;
