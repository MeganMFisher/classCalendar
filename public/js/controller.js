angular.module('app').controller('mainCtrl', function($scope, mainSrv){

    $scope.test = '3234'
    $scope.test1 = mainSrv.test
})