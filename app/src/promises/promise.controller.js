/* eslint-disable */

'use strict';

angular
    .module('learningjsApp')
    .controller('PromiseCtrl', PromiseCtrl);

function PromiseCtrl($scope, $http, $timeout, $q) {
    var todos; 

    /* Click Listener */
    $scope.onBtn1ClickListener = function () {
        getTwoApi();
    };


    function getTwoApi() {
        todos = [];
        $timeout(function () { getFirstApi(); }, 2500);
        $timeout(function () { getSecondApi(); }, 500);
        console.log(todos);
    }

    function getFirstApi() {
        $http.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (result) {
                console.log('1: %O', result);
                todos.push(result);
            });
    }

    function getSecondApi() {
        $http.get('https://jsonplaceholder.typicode.com/todos/2')
            .then(function (result) {
                console.log('2 %O', result);
                todos.push(result);
            });
    }
}
