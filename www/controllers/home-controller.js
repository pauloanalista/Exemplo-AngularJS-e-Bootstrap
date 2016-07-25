(function() {
    'use strict';
    angular.module('globalBusApp').controller('HomeCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope'];

    function LoginCtrl($scope) {
        var vm = this;
    }
})();