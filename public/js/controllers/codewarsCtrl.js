angular.module('app').controller('codewarsCtrl', function($scope) {

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
        console.log(name)
    }

    $scope.advancedList = (name) => {
        console.log(name)
    }


})