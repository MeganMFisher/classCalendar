'use strict';

angular.module('app', ['ui.calendar', 'ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

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
      // console.log(events)
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

    //Events

    this.getEvents = function () {
        return $http.get('http://localhost:3001/events');
    };

    this.addEvent = function (eventInfo) {
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