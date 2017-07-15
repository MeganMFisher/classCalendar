angular.module('app').service('mainSrv', function($http){
 
    this.getEvents = () => {
    return $http.get('http://localhost:3001/events')
    }

    this.addEvent = (eventInfo) => {
    return $http.post('http://localhost:3001/events', eventInfo)
    }

})