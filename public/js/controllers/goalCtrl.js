angular.module('app').controller('goalCtrl', function($scope, mainSrv){

    mainSrv.getGoals().then((res) => {
        $scope.m1Goals = mainSrv.mentorGoals(res, 1)
        $scope.m2Goals = mainSrv.mentorGoals(res, 2)
        $scope.m3Goals = mainSrv.mentorGoals(res, 3)
    })

    $scope.removeGoal = (id, mentorid) => {
        console.log(id)
        console.log(mentorid)
    }

})