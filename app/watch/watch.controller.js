/* eslint-disable */

'use strict';

angular
    .module('learningjsApp')
    .controller('WatchCtrl', WatchCtrl);

function WatchCtrl($scope) {

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
