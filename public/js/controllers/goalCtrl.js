angular.module('app').controller('goalCtrl', function($scope, mainSrv){

    // $scope.recGoal = () => {
    // mainSrv.getGoals().then((response) => {
    //   $scope.goals = response.data;
    //   console.log($scope.goals)
    // })
    // }
    // $scope.recGoal()

    mainSrv.getGoals().then((res) => {
        $scope.m1Goals = mainSrv.mentorGoals(res, 1)
        $scope.m2Goals = mainSrv.mentorGoals(res, 2)
        $scope.m3Goals = mainSrv.mentorGoals(res, 3)
    })

})