angular.module('app').controller('codewarsCtrl', function($scope, mainSrv) {


    $scope.basicList = (name) => {
        if(!name) {
            console.log('Argh')
        } else {
            mainSrv.addBasic(name).then((res)=>{
             $scope.recBasic()
            })
        }
    }

    $scope.advancedList = (name) => {
        if(!name) {
            console.log('Argh')
        } else {
            mainSrv.addAdvanced(name).then((res)=>{
             $scope.recAdvanced()
            })
        }
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

    $scope.removeBasic = (name) => {
        console.log(name)
        mainSrv.removeBasic(name).then((res) => {
            $scope.recBasic()
        })
    }

    $scope.removeAdvanced = (name) => {
        console.log(name)
        mainSrv.removeAdvanced(name).then((res) => {
            $scope.recAdvanced()
        })
    }

})