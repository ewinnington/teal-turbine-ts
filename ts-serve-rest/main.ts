import express = require('express');

// For POST-Support
let bodyParser = require('body-parser');

// Create a new express app instance
const app: express.Application = express();

app.use(bodyParser.json({extended : true}));

interface Event {
    id: string; 
    name: string;
    created: Date
  }

  interface EventRequest {
    name: string;
  }

let i : number = 1; 
let events : Event[] = [{"id":"1", "name":"First event", "created":new Date()}]

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api/events', (request, response) => {
    {
        response.json(events);
    }
});

app.get('/api/events/:id', (request, response) => {
    let id = request.params.id;

    if (!(id)) {
        response
            .status(400)
            .send('No string as name');
    } else {
        response.json(events.find(e => e.id == id));
    }
});

app.post('/api/events', function(request, response) {
    const ev = {id : (++i).toString(), name : request.body.name, created : new Date()} as Event;
    events.push(ev); 

    response
            .status(201)
            .json(ev);
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});