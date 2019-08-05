'use strict';

angular
    .module('learningjsApp', [
        'ngRoute'
    ])
    .config(routeConfig);

routeConfig.$inject = ['$routeProvider'];

function routeConfig($routeProvider) {
    $routeProvider
        .when('/comments', {
            templateUrl: '../comments/comment.html',
            controller: 'CommentCtrl'
        })
        .when('/users', {
            templateUrl: '../users/users.html',
            controller: 'UsersCtrl as vm'
        })
        .when('/scope', {
            templateUrl: '../scope/scope.html',
            controller: 'ScopeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
        ;
}