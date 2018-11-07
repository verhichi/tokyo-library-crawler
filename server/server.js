// This file is the gateway server file.
// The express framework will setup on this file.
// All other server-side logic and tools will branch from this file.


/******************************************************************************
 *                                 Server Setup
 ******************************************************************************/
const cluster = require('cluster');

// Code to run if we're in the master process
if(cluster.isMaster){

  const master_start_timestamp = new Date().toLocaleString();
  let cpu_count = require('os').cpus().length;

  console.log('\n--- MASTER CLUSTER STATUS ---');
  console.log(master_start_timestamp);
  console.log('Master Cluster launched successfully');
  console.log(`There are ${cpu_count} cpu(s) on this machine`);
  console.log('-----------------------------\n');

  for(let idx = 0; idx < cpu_count; idx++){
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.id} has died...creating a new one`);
    cluster.fork();
  });

} else {

  const express = require('express') // import express framework
  const app = express();             // instantiate express
  const port = 3000;                 // set default port number

  const body_parser = require('body-parser');        // import body-parser
  app.use(body_parser.urlencoded({extended: true})); // use body-parser
  app.use(body_parser.json());                       // parse body to json

  // set express listener
  var listener = app.listen(port, () => {
    const server_start_timestamp = new Date().toLocaleString();

    console.log(`[${server_start_timestamp}] Worker ID: ${cluster.worker.id} - Worker loaded up successfully!`);
  });


  /******************************************************************************
  *                               Path Setup
  ******************************************************************************/
  const rest_routes = require('./REST/rest'); // import REST route file
  const path = require('path');                  // import path object

  app.use(express.static(path.join(__dirname, '../build'))); // Set path for file to ../build

  app.use('/rest', rest_routes); // REST routing

  // Set Unknown URL to open index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });

}
