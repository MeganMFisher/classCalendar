angular.module('app').controller('todoCtrl', function($scope, mainSrv){

    mainSrv.getTodos().then((res) => {
        $scope.m1Todos = mainSrv.mentorTodos(res, 1)
        $scope.m2Todos = mainSrv.mentorTodos(res, 2)
        $scope.m3Todos = mainSrv.mentorTodos(res, 3)
    })

})