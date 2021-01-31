//Import Variables
var express = require('express');
var app = express();
var web = require('http').createServer(app);
var io = require('socket.io')(web);           //          ../../app/socket.io

//Variables
const port = 3000;
const rootFolder = 'src';  //Path to the Source Folder.

//Start the Server on a spezified port
web.listen(port, function()
{
  console.log('Started the Server on port: ' + port);
});

//Load all Sources
app.use(express.static(rootFolder));

//Log the Error Message
web.on('error', function(e)
{
    console.log(e);
});

//Should be in server.js ...!!!

var server = require('./src/server/server.js');

server.run(io);