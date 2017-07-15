angular.module('app', ['ui.calendar', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html'
        })

        .state('goals',{
            url: '/goals',
            templateUrl: './views/goals.html'
        })

        .state('todo', {
            url: '/todo',   
            templateUrl: './views/todo.html'
        })
        
})