angular.module('app').service('mainSrv', function($http){
 
    //Events

    this.getEvents = () => {
    return $http.get('http://localhost:3001/events')
    }

    this.addEvent = (eventInfo) => {
    return $http.post('http://localhost:3001/events', eventInfo)
    }

    //Todos

    this.getTodos = () => {
    return $http.get('http://localhost:3001/todos')
    }

    this.addTodo = (todoInfo) => {
    return $http.post('http://localhost:3001/todos', todoInfo)
    }

    //Goals

    this.getGoals = () => {
    return $http.get('http://localhost:3001/goals')
    }

    this.addGoal = (goalInfo) => {
    return $http.post('http://localhost:3001/goals', goalInfo)
    }

})