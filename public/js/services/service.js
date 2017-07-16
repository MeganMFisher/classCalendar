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

    this.mentorTodos = (res, mID) => {
       var allTodos = res.data;
       console.log(allTodos)
       var todos = []
       for(var i = 0; i < allTodos.length; i++){
           if(mID === allTodos[i].mentorid) {
                todos.push(allTodos[i])
           }
       }
        return todos
    }

    this.addTodo = (todoInfo) => {
    return $http.post('http://localhost:3001/todos', todoInfo)
    }

    //Goals

    this.getGoals = () => {
    return $http.get('http://localhost:3001/goals')
    }


   this.mentorGoals = (res, mID) => {
       var allGoals = res.data;
       var goals = []
       for(var i = 0; i < allGoals.length; i++){
           if(mID === allGoals[i].mentorid) {
                goals.push(allGoals[i])
           }
       }
        return goals
    }


    this.addGoal = (goalInfo) => {
    return $http.post('http://localhost:3001/goals', goalInfo)
    }

})