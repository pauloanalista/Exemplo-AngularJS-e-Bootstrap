(function() {
    'use strict';
    angular.module('globalBusApp').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope'];

    function LoginCtrl($scope) {
        var vm = this;
        vm.mensagem = 'Teste Paulo';
        vm.autenticarUsuario = function(){
            alert('sss');
        }
       
    }
})();