(function () {
    'use strict';

    angular.module('project-care', [
        'ui.router'
    ]).config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $stateProvider.state('home', {
            url: '/home',
            views: {
                "content": {
                    templateUrl: 'project-care/main/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        }).state('about', {
            url: '/about',
            views: {
                "content": {
                    templateUrl: 'project-care/main/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                }
            }
        });

        $urlRouterProvider.otherwise('/404');
    }]);
})();
