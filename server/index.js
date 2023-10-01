// create server and listen for requests on port 3000
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// add routes, both API and view
// create a GET route for getting file data from the server
app.get('/api/file', (req, res) => {
    // read file 
    fs.readFile('../resources/properties.csv', 'utf8', function(err, data) {
        if (err) throw err;
        // send file data to the browser
        res.send(data);
    });
});

// start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});