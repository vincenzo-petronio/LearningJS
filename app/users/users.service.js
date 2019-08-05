'use strict';

angular
    .module('learningjsApp')
    .factory('usersStubService', usersStubService);

function usersStubService() {
    
    return { getAll: getAll };

    function getAll() {
        return [
            {id: 1, name: 'Qui'},
            {id: 2, name: 'Quo'},
            {id: 3, name: 'Qua'},
        ]
    }
}
