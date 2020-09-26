/* eslint-disable */

'use strict';

angular
    .module('learningjsApp')
    .controller('BaseCtrl', BaseCtrl);

function BaseCtrl($scope) {
    var app_version = '0.1.0';

    /** Esempio di Binding */
    $scope.getAppVersion = function () {
        return app_version;
    };
}