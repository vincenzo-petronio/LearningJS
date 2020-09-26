'use strict';

angular
    .module('learningjsApp', [
        'ngRoute',
        'ngResource',
    ])
    .config(routeConfig);

routeConfig.$inject = ['$routeProvider'];

function routeConfig($routeProvider) {
    $routeProvider
        .when('/comments', {
            templateUrl: '../src/comments/comment.html',
            controller: 'CommentCtrl',
        })
        // .when('/comments/:id', {
        //     templateUrl: '../comments/comment.html',
        //     controller: 'CommentCtrl'
        // })
        .when('/users', {
            templateUrl: '../src/users/users.html',
            controller: 'UsersCtrl as vm',
        })
        .when('/scope', {
            templateUrl: '../src/scope/scope.html',
            controller: 'ScopeCtrl',
        })
        .when('/watch', {
            templateUrl: '../src/watch/watch.html',
            controller: 'WatchCtrl',
        })
        .when('/promises', {
            templateUrl: '../src/promises/promise.html',
            controller: 'PromiseCtrl',
        })
        .otherwise({
            redirectTo: '/',
        })
        ;
}
