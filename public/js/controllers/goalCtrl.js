angular.module('app').controller('goalCtrl', function($scope, mainSrv){

    recGoal = () => {
    mainSrv.getGoals().then((response) => {
      $scope.goals = response.data;
      console.log($scope.goals)
    })
    }
    recGoal()

})