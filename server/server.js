const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
    //   config = require('./config.js'),
      cors = require('cors')


var port = 3001;

var app = express();
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors());

 massive(process.env.database).then ((db) => {
            app.set('db', db);
    });


const controller = require('./controller.js');

app.post('/basic', controller.postBasic);
app.post('/advanced', controller.postAdvanced);
app.get('/basic', controller.getBasic);
app.get('/advanced', controller.getAdvanced);
app.delete('/basic/:name', controller.deleteBasic);
app.delete('/advanced/:name', controller.deleteAdvanced);
app.get('/events', controller.getEvents);
app.get('/todos', controller.getTodos);
app.get('/goals', controller.getGoals);
app.post('/events', controller.addEvent);
app.post('/todos', controller.addTodo);
app.post('/goals', controller.addGoal);



app.listen(process.env.PORT || port, function () {
  console.log('listening on port', this.address().port);
});