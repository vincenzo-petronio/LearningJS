'use strict';

angular
    .module('learningjsApp')
    .controller('UsersCtrl', UsersCtrl);

UsersCtrl.$inject = ['usersStubService'];

function UsersCtrl(usersStubService) {
    var vm = this;
    
    vm.title = 'Users Controller with Service';
    vm.data = usersStubService.getAll();
}