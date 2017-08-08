angular.module('app').service('mainSrv', function($http){

    //Codewars 

    this.addBasic = (name) => {
        var data = {
            name: name
        }
    return $http.post('/basic', data)
    }

    this.addAdvanced = (name) => {
        var data = {
            name: name
        }
    return $http.post('/advanced', data)
    }

    this.getBasic = () => {
        return $http.get('/basic')
    }

    this.getAdvanced = () => {
        return $http.get('/advanced')
    }

    this.removeBasic = (name) => {
        return $http.delete('/basic/' + name)
    }

    this.removeAdvanced = (name) => {
        return $http.delete('/advanced/' + name)
    }

 
    //Events

    this.getEvents = () => {
    return $http.get('/events')
    }

    this.addEvent = (eventInfo) => {
        // console.log(eventInfo)
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