/* eslint-disable */

'use strict';

angular
    .module('learningjsApp')
    .controller('BaseCtrl', BaseCtrl);

function BaseCtrl($scope) {
    var app_version = '0.0.1';

    /** Esempio di Binding */
    $scope.getAppVersion = function () {
        return app_version;
    };

    /** Esempio di function watch su un model */
    $scope.magicNumber = 0;
    $scope.$watch('magicNumber', function (newValue, odlValue) {
        if ($scope.magicNumber < 0) {
            $scope.magicNumberResult = 'Number must be > 0!';
        } else {
            $scope.magicNumberResult = '';
        }
    });
}