'use strict';

angular
    .module('learningjsApp')
    .controller('ScopeCtrl', ScopeCtrl);

function ScopeCtrl($scope) {
    // METODO IN UN OGGETTO
    var data = {
        id: 100,
        label: 'first item',
        getLabel: function () {
            // Dal metodo è possibile accedere alle proprietà
            // dell'oggetto sul quale il metodo è invocato.
            console.log(this.id + ' ' + this.label);
        }
    }

    $scope.getLabelFromData = function () {
        return data.getLabel();
    }


    // COSTRUTTORE
    var dataobj = function (id, label) {
        // Nel costruttore con this si fa riferimento all'oggetto
        // che verrà creato con new.
        this.id = id;
        this.label = label;
        this.getLabel = function () {
            console.log(this.id + ' ' + this.label);
        }
    }
    $scope.getDataObj = function (i, l) {
        var r = new dataobj(i, l);
        return r.getLabel();
    }
}