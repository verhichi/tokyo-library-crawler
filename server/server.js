// This file is the gateway server file.
// The express framework will setup on this file.
// All other server-side logic and tools will branch from this file.

/******************************************************************************
 *                                 Server Setup
 ******************************************************************************/
const express = require('express') // import express framework
const app = express();             // instantiate express
const port = 3000;                 // set default port number

const body_parser = require('body-parser');        // import body-parser
app.use(body_parser.urlencoded({extended: true})); // use body-parser
app.use(body_parser.json());                       // parse body to json

// set express listener
var listener = app.listen(port, () => {
  const server_start_timestamp = new Date().toLocaleString();

  console.log('\n--- SERVER STATUS ---');
  console.log('Server Start Date:', server_start_timestamp);

  console.log('The Server is up and running!')
  console.log(`Access via: http://localhost:${port}`)
});


/******************************************************************************
 *                               Path Setup
 ******************************************************************************/
const rest_routes = require('./REST/rest.js'); // import REST route file
const path = require('path');                  // import path object

app.use(express.static(path.join(__dirname, '../build'))); // Set path for file to ../build

app.use('/', rest_routes); // REST routing

// Set Unknown URL to open index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
