angular.module('app').controller('codewarsCtrl', function($scope, mainSrv) {

    $scope.advanced = [ 
        {
            name: 'Dummy'
        },
        {
            name: 'Data'
        }
    ]

    $scope.basic = [
        {
            name: 'Dummy'
        },
        {
            name: 'Data'
        }
    ]


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


})