'use strict';

angular.module('app', ['ui.calendar', 'ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('calendar', {
        url: '/',
        templateUrl: './views/calendar.html'
    }).state('goals', {
        url: '/goals',
        templateUrl: './views/goals.html'
    }).state('todo', {
        url: '/todo',
        templateUrl: './views/todo.html'
    });
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, $compile, uiCalendarConfig, mainSrv) {

  $scope.events = [];

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
      }
    }
  };

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $scope.recEvents = function () {
    mainSrv.getEvents().then(function (response) {
      var events = response.data;
      console.log(events);
      // events.map(e => {
      //   const {title, description, end_time, start_time } = e

      //   let startTime = moment(start_time).format()
      //   let endTime = moment(end_time).format()

      //   $scope.events.push({
      //         title: title,
      //         descrition: descrition,
      //         start: startTime,
      //         end: endTime
      //       })
      // })
    });
  };
  $scope.recEvents();

  // $scope.addEvent = function (event) {
  //   mainSrv.addEvent(event).then(response => {
  //     const {
  //       title,
  //       description,
  //       start_time,
  //       end_time
  //     } = response.data[0]

  //     let startTime = moment(start_time).format()
  //     let endTime = moment(end_time).format()


  //     $scope.events.push({
  //       title: title,
  //       description, description,
  //       start: startTime,
  //       end: endTime
  //     })

  //   })

  // }

});

//to do list for each mentor -add and remove do but still store.

//links to the different sites we need. 

//individual goals.

//login
'use strict';

angular.module('app').service('mainSrv', function ($http) {

   this.getEvents = function () {
      return $http.get('http://localhost:3001/events');
   };

   this.addEvent = function (eventInfo) {
      return $http.post('http://localhost:3001/events', eventInfo);
   };
});