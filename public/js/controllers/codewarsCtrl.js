angular.module('app').controller('codewarsCtrl', function($scope, mainSrv) {


    $scope.basicList = (name) => {
        mainSrv.addBasic(name).then((res)=>{
            $scope.recBasic()
        })
    }

    $scope.advancedList = (name) => {
        mainSrv.addAdvanced(name).then((res)=>{
            $scope.recAdvanced()
        })
    }

    $scope.recBasic = () => {
        mainSrv.getBasic().then((res)=> {
            $scope.basic = res.data.reverse()
        })
    }
    $scope.recBasic()

    $scope.recAdvanced = () => {
        mainSrv.getAdvanced().then((res)=> {
            $scope.advanced = res.data.reverse()
        })
    }
    $scope.recAdvanced()

})