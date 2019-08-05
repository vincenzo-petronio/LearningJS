'use strict';

angular
    .module('learningjsApp')
    .controller('CommentCtrl', CommentCtrl);

function CommentCtrl($scope, $http) {
    $scope.title = 'Comments - consuming external service';

    $http(
        {
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/comments'
        })
        .then(function (response, status, headers, config) {
            $scope.comments = response.data;
        }, function (response, status, headers, config) {

        })
        ;
}
