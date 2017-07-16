angular.module('app').controller('todoCtrl', function($scope, mainSrv){

    recTodo = () => {
    mainSrv.getTodos().then((response) => {
      $scope.todos = response.data;
      console.log($scope.todos)
    })
    }
    recTodo()

})