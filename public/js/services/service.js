angular.module('app').service('mainSrv', function($http){

    //Codewars 

    this.addBasic = (name) => {
        var data = {
            name: name
        }
    return $http.post('http://cohort-resources.herokuapp.com/#!/basic', data)
    }

    this.addAdvanced = (name) => {
        var data = {
            name: name
        }
    return $http.post('http://cohort-resources.herokuapp.com/#!/advanced', data)
    }

    this.getBasic = () => {
        return $http.get('http://cohort-resources.herokuapp.com/#!/basic')
    }

    this.getAdvanced = () => {
        return $http.get('http://cohort-resources.herokuapp.com/#!/advanced')
    }

    this.removeBasic = (name) => {
        return $http.delete('http://cohort-resources.herokuapp.com/#!/basic/' + name)
    }

    this.removeAdvanced = (name) => {
        return $http.delete('http://cohort-resources.herokuapp.com/#!/advanced/' + name)
    }

 
    //Events

    this.getEvents = () => {
    return $http.get('http://cohort-resources.herokuapp.com/#!/events')
    }

    this.addEvent = (eventInfo) => {
        // console.log(eventInfo)
    return $http.post('http://cohort-resources.herokuapp.com/#!/events', eventInfo)
    }


    //Todos

    this.getTodos = () => {
    return $http.get('http://cohort-resources.herokuapp.com/#!/todos')
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
    return $http.post('http://cohort-resources.herokuapp.com/#!/todos', todoInfo)
    }

    //Goals

    this.getGoals = () => {
    return $http.get('http://cohort-resources.herokuapp.com/#!/goals')
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
    return $http.post('http://cohort-resources.herokuapp.com/#!/goals', goalInfo)
    }

})