angular.module('app').controller('codewarsCtrl', function($scope, mainSrv) {


    $scope.basicList = (name) => {
        mainSrv.addBasic(name).then((res)=>{
            console.log('tada')
        })
    }

    $scope.advancedList = (name) => {
        mainSrv.addAdvanced(name).then((res)=>{
            console.log('tada')
        })
    }

    $scope.recBasic = () => {
        mainSrv.getBasic().then((res)=> {
            $scope.basic = res.data
        })
    }
    $scope.recBasic()

    $scope.recAdvanced = () => {
        mainSrv.getAdvanced().then((res)=> {
            $scope.advanced = res.data
        })
    }
    $scope.recAdvanced()

})