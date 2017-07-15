'use strict';

angular.module('app', ['ui.calendar']);
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, $compile, uiCalendarConfig, mainSrv) {

  $scope.eventSources = [];

  $scope.addToEvents = function (eventToAdd) {
    mainSrv.addEvent(eventToAdd);
  };

  recEvents = function recEvents() {
    mainSrv.getEvents().then(function (response) {
      $scope.eventStuff = response.data;
      console.log($scope.eventStuff);
    });
  };
  recEvents();

  $scope.uiConfig = {
    calendar: {
      height: 800,
      defaultView: "agendaWeek",
      editable: true,
      selectable: true,
      weekends: false,
      header: {
        left: 'today prev,next',
        center: 'title',
        right: 'month, agendaWeek agendaDay'
        //   eventClick: $scope.alertEventOnClick,
        //   eventDrop: $scope.alertOnDrop,
        //   eventResize: $scope.alertOnResize,
        //   eventRender: $scope.eventRender

      } }
  };

  //    var date = new Date();
  //     var d = date.getDate();
  //     var m = date.getMonth();
  //     var y = date.getFullYear();

  //     $scope.getEvents = () => {
  //     mainSvc.getEvents().then((response) => {
  //       console.log("controller: ", response)
  //       response.map(e => {
  //         const {color, title, end_time, start_time } = e

  //         let startTime = moment(start_time).format()
  //         let endTime = moment(end_time).format()

  //         $scope.events.push({
  //               title: title,
  //               start: startTime,
  //               end: endTime,
  //               color: color
  //             })
  //       })
  //     })
  //   } 
  //   $scope.getEvents()

  //   $scope.addEvent = function (event) {
  //     mainSvc.addEvent(event).then(response => {
  //       const {
  //         title,
  //         color,
  //         start_time,
  //         end_time
  //       } = response.data[0]

  //       let startTime = moment(start_time).format()
  //       let endTime = moment(end_time).format()


  //       $scope.events.push({
  //         title: title,
  //         start: startTime,
  //         end: endTime,
  //         color: color
  //       })

  //     })

  //   }

});
'use strict';

angular.module('app').service('mainSrv', function ($http) {

   this.getEvents = function () {
      return $http.get('http://localhost:3001/events');
   };

   this.addEvent = function (eventInfo) {
      return $http.post('http://localhost:3001/events', eventInfo);
   };
});