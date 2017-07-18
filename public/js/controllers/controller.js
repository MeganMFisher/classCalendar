angular.module('app').controller('mainCtrl', function($scope, $compile, uiCalendarConfig, mainSrv){

  $scope.showModal = false

  $scope.events = []
  $scope.eventSources = [ $scope.events ]
 

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

  $scope.recEvents = () => {
    mainSrv.getEvents().then((response) => {
      var events = response.data;
      console.log(events)
      events.map(e => {
        const {title, description, end_time, start_time } = e

        let startTime = moment(start_time).format()
        let endTime = moment(end_time).format()

        $scope.events.push({
              title: title,
              description: description,
              start: startTime,
              end: endTime
            })
      })
    })
  } 
  $scope.recEvents()


  $scope.addEvent = function (event) {
    console.log(event)
    mainSrv.addEvent(event).then(response => {
      const {
        title,
        description,
        start_time,
        end_time
      } = response.data[0]

      let startTime = moment(start_time).format()
      let endTime = moment(end_time).format()


      $scope.events.push({
        title: title,
        description, description,
        start: startTime,
        end: endTime
      })

    })

  }


})

//to do list for each mentor -add and remove do but still store.

//links to the different sites we need. 

//individual goals.

//login 