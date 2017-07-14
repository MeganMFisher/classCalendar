angular.module('app').controller('mainCtrl', function($scope, $compile, uiCalendarConfig, mainSrv){

 $scope.eventSources = [];

//    $scope.showModal = false

//   $scope.events = []

  $scope.uiConfig = {
    calendar: {
      height: 800,
      defaultView: "agendaWeek",
      editable: true,
      selectable: true,
      header: {
        left: 'today prev,next',
        center: 'title',
        right: 'month, agendaWeek agendaDay'
      }
    //   eventClick: $scope.alertEventOnClick,
    //   eventDrop: $scope.alertOnDrop,
    //   eventResize: $scope.alertOnResize,
    //   eventRender: $scope.eventRender

    }
  };
})