/* eslint-disable */

'use strict';

angular
    .module('learningjsApp')
    .controller('PromiseCtrl', PromiseCtrl);

function PromiseCtrl($scope, $http, $timeout, $q) {
    var todos;

    /* Click Listener */
    $scope.onBtn1ClickListener = function () {
        // getTwoApi();
        // getTwoApiNested();
        // getTwoApiNested(anotherApiCallback);

        getFirstItemAsync()
            .then(function onSuccess(result) {  // INIT
                todos = [];
                return result;
            })
            .then(function onSuccess(result) {  // PUSH
                return pushToArray(result.data);
            })
            .then(function onSuccess(isSaved) { // PRINT
                // if (isSaved) {
                logObj(todos);
                return true;
                // }
                // return false;
            })
            .then(function onSuccess(isReady) {
                return getSecondItemAsync();
            })
            .then(function onSuccess(result) {
                return pushToArray(result.data);
            })
            .then(function onSuccess(isSaved) {
                // if (isSaved) {
                logObj(todos);
                return true;
                // }
                // return false;
            })
            .catch((err) => {
                console.log(err);
            })
            ;
    };

    function getTwoApi() {
        todos = [];
        $timeout(function () {
            getFirstItem();
        }, 2500);
        console.log('step 1 - ' + JSON.stringify((todos)));
        $timeout(function () {
            getSecondItem();
        }, 500);
        console.log('step 2 - ' + JSON.stringify((todos)));
    }

    function getFirstItem() {
        $http.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (result) {
                // console.log('1 => %O', result);
                if (result) {
                    todos.push(result.data);

                    console.log('step 1 - ' + JSON.stringify((todos)));
                } else {
                    console.log('ERROR');
                }
            });
    }

    function getSecondItem() {
        $http.get('https://jsonplaceholder.typicode.com/todos/2')
            .then(function (result) {
                // console.log('2 => %O', result);
                if (result) {
                    todos.push(result.data);

                    console.log('step 2 - ' + JSON.stringify((todos)));
                } else {
                    console.log('ERROR');
                }
            });
    }

    function getTwoApiNested(callback) {
        todos = [];

        $http.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (result) {
                // console.log('1 => %O', result);
                if (result) {
                    todos.push(result.data);
                    console.log('step 1 - ' + JSON.stringify((todos)));

                    $http.get('https://jsonplaceholder.typicode.com/todos/2')
                        .then(function (result) {
                            // console.log('2 => %O', result);
                            if (result) {
                                todos.push(result.data);
                                console.log('step 2 - ' + JSON.stringify((todos)));

                                // if (callback) {
                                //     callback(); // CALLBACK HELL !!!
                                // }
                            } else {
                                console.log('ERROR');
                            }
                        });
                } else {
                    console.log('ERROR');
                }
            });
    }

    function anotherApiCallback() {
        $http.get('https://jsonplaceholder.typicode.com/todos/3')
            .then(function (result) {
                // console.log('3 => %O', result);
                todos.push(result.data);
                console.log('step 3 - ' + JSON.stringify((todos)));
            });
    }

    function getTimeout(delay) {
        return $timeout(delay);
    }

    function getFirstItemAsync() {
        return $http.get('https://jsonplaceholder.typicode.com/todos/1');
    }

    function getSecondItemAsync() {
        throw new Error('server down');
        return $http.get('https://jsonplaceholder.typicode.com/todos/2');
    }

    function pushToArray(item) {
        if (item) {
            todos.push(item);
            return true;
        } else {
            throw new Error('ArgumentNullException');
        }
    }

    function logObj(obj) {
        if (obj) {
            console.log(JSON.stringify((obj)));
            return true;
        } else {
            throw new Error('ArgumentNullException');
        }
    }
}
