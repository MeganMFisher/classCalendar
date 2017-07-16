angular.module('app', ['ui.calendar', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('calendar', {
            url: '/',
            templateUrl: './views/calendar.html'
        })

        .state('goals',{
            url: '/goals',
            templateUrl: './views/goals.html',
            controller: 'goalCtrl'
        })

        .state('todo', {
            url: '/todo',   
            templateUrl: './views/todo.html',
            controller: 'todoCtrl'
        })

        .state('resources', {
            url: '/resources',   
            templateUrl: './views/resources.html'
        })
        
})