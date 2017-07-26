'use strict';

angular.module('app', ['ui.calendar', 'ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/resources');

    $stateProvider.state('calendar', {
        url: '/',
        templateUrl: './views/calendar.html'
    }).state('goals', {
        url: '/goals',
        templateUrl: './views/goals.html',
        controller: 'goalCtrl'
    }).state('todo', {
        url: '/todo',
        templateUrl: './views/todo.html',
        controller: 'todoCtrl'
    }).state('resources', {
        url: '/resources',
        templateUrl: './views/resources.html'
    }).state('links', {
        url: '/links',
        templateUrl: './views/links.html'
    }).state('codewars', {
        url: '/codewars',
        templateUrl: './views/codewars.html',
        controller: 'codewarsCtrl'
    });
});
'use strict';

angular.module('app').controller('codewarsCtrl', function ($scope, mainSrv) {

    $scope.basicList = function (name) {
        mainSrv.addBasic(name).then(function (res) {
            console.log('tada');
        });
    };

    $scope.advancedList = function (name) {
        mainSrv.addAdvanced(name).then(function (res) {
            console.log('tada');
        });
    };

    $scope.recBasic = function () {
        mainSrv.getBasic().then(function (res) {
            $scope.basic = res.data;
        });
    };
    $scope.recBasic();

    $scope.recAdvanced = function () {
        mainSrv.getAdvanced().then(function (res) {
            $scope.advanced = res.data;
        });
    };
    $scope.recAdvanced();
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, $compile, uiCalendarConfig, mainSrv) {

  $scope.showModal = false;

  $scope.events = [];
  $scope.eventSources = [$scope.events];

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
      },
      eventClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender
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
      events.map(function (e) {
        var title = e.title,
            description = e.description,
            end_time = e.end_time,
            start_time = e.start_time;


        var startTime = moment(start_time).format();
        var endTime = moment(end_time).format();

        $scope.events.push({
          title: title,
          description: description,
          start: startTime,
          end: endTime
        });
      });
    });
  };
  $scope.recEvents();

  $scope.addEvent = function (event) {
    var startTime = moment(event.start_time).format();
    var endTime = moment(event.end_time).format();
    console.log(startTime, endTime, event.start_time);
    console.log(event);
    var eventInfo = {
      title: event.title,
      description: event.description,
      start_time: startTime,
      end_time: endTime

      // console.log(eventInfo)


      // console.log(event)
    };mainSrv.addEvent(eventInfo).then(function (response) {
      // const {
      //   title,
      //   description,
      //   start_time,
      //   end_time
      // } = response.data[0]
      // console.log(response.data[0])

      // let startTime = moment(start_time).format()
      // let endTime = moment(end_time).format()

      //   console.log(startTime)

      // $scope.events.push({
      //   title: title,
      //   description, description,
      //   start: startTime,
      //   end: endTime
      // })
      // console.log($scope.events)

    });
  };

  //  $scope.extraEventSignature = function (event) {
  //   return "" + event.price;
  // }
  // /* remove event */
  // $scope.remove = function (index) {
  //   $scope.events.splice(index, 1);
  // };
  // /* Change View */
  // $scope.changeView = function (view, calendar) {
  //   uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
  // };

  // /* Change View */
  // $scope.renderCalender = function (calendar) {
  //   if (uiCalendarConfig.calendars[calendar]) {
  //     uiCalendarConfig.calendars[calendar].fullCalendar('render');
  //   }
  // };
  // /* Render Tooltip */
  // $scope.eventRender = function (event, element, view) {
  //   element.attr({
  //     'tooltip': event.title,
  //     'tooltip-append-to-body': true
  //   });
  //   $compile(element)($scope);
  // };


  // /* event sources array*/
  // $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];

});

//to do list for each mentor -add and remove do but still store.

//links to the different sites we need. 

//individual goals.

//login
'use strict';

angular.module('app').controller('goalCtrl', function ($scope, mainSrv) {

    mainSrv.getGoals().then(function (res) {
        $scope.m1Goals = mainSrv.mentorGoals(res, 1);
        $scope.m2Goals = mainSrv.mentorGoals(res, 2);
        $scope.m3Goals = mainSrv.mentorGoals(res, 3);
    });

    $scope.removeGoal = function (id, mentorid) {
        console.log(id);
        console.log(mentorid);
    };
});
'use strict';

angular.module('app').controller('todoCtrl', function ($scope, mainSrv) {

    mainSrv.getTodos().then(function (res) {
        $scope.m1Todos = mainSrv.mentorTodos(res, 1);
        $scope.m2Todos = mainSrv.mentorTodos(res, 2);
        $scope.m3Todos = mainSrv.mentorTodos(res, 3);
    });
});
'use strict';

angular.module('app').service('mainSrv', function ($http) {

    //Codewars 

    this.addBasic = function (name) {
        var data = {
            name: name
        };
        return $http.post('http://localhost:3001/basic', data);
    };

    this.addAdvanced = function (name) {
        var data = {
            name: name
        };
        return $http.post('http://localhost:3001/advanced', data);
    };

    this.getBasic = function () {
        return $http.get('http://localhost:3001/basic');
    };

    this.getAdvanced = function () {
        return $http.get('http://localhost:3001/advanced');
    };

    //Events

    this.getEvents = function () {
        return $http.get('http://localhost:3001/events');
    };

    this.addEvent = function (eventInfo) {
        // console.log(eventInfo)
        return $http.post('http://localhost:3001/events', eventInfo);
    };

    //Todos

    this.getTodos = function () {
        return $http.get('http://localhost:3001/todos');
    };

    this.mentorTodos = function (res, mID) {
        var allTodos = res.data;
        console.log(allTodos);
        var todos = [];
        for (var i = 0; i < allTodos.length; i++) {
            if (mID === allTodos[i].mentorid) {
                todos.push(allTodos[i]);
            }
        }
        return todos;
    };

    this.addTodo = function (todoInfo) {
        return $http.post('http://localhost:3001/todos', todoInfo);
    };

    //Goals

    this.getGoals = function () {
        return $http.get('http://localhost:3001/goals');
    };

    this.mentorGoals = function (res, mID) {
        var allGoals = res.data;
        var goals = [];
        for (var i = 0; i < allGoals.length; i++) {
            if (mID === allGoals[i].mentorid) {
                goals.push(allGoals[i]);
            }
        }
        return goals;
    };

    this.addGoal = function (goalInfo) {
        return $http.post('http://localhost:3001/goals', goalInfo);
    };
});