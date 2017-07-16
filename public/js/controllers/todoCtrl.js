angular.module('app').controller('todoCtrl', function($scope, mainSrv){

    // $scope.recTodo = () => {
    // mainSrv.getTodos().then((response) => {
    //   $scope.todos = response.data;
    //   console.log($scope.todos)
    // })
    // }
    // $scope.recTodo()

    mainSrv.getTodos().then((res) => {
        $scope.m1Todos = mainSrv.mentorTodos(res, 1)
        $scope.m2Todos = mainSrv.mentorTodos(res, 2)
        $scope.m3Todos = mainSrv.mentorTodos(res, 3)
    })

})