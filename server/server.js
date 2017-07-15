const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js'),
      cors = require('cors')


var port = 3001;

var app = express();
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors());

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

const controller = require('./controller.js');


app.get('/events', controller.getEvents);
app.post('/events', controller.addEvent);


app.listen(process.env.PORT || port, function () {
  console.log('listening on port', this.address().port);
});