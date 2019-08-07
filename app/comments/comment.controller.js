'use strict';

angular
    .module('learningjsApp')
    .controller('CommentCtrl', CommentCtrl)
    .factory('RESTService', RESTService)
    ;

function CommentCtrl($scope, $http, RESTService, $route) {
    $scope.title = 'Comments - consuming external service';

    $http(
        {
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/comments'
        })
        .then(function (response, status, headers, config) {
            $scope.comments = response.data;
        }, function (response, status, headers, config) {
            console.log('ERROR');
        })
        ;


    RESTService.get({ id: 50 }).$promise.then(function (data) {
        $scope.comment = data.id + ' - ' + data.email;
    });

}

function RESTService($resource) {
    return $resource('http://jsonplaceholder.typicode.com/comments/:id', { id: '@id' });
}
