class Server
{
    constructor()
    {
    }

    static run(io)
    {
        //The server does something if there is a connection
        io.on('connection', function(socket)
        {
            //User connect or diconnect in Serverlog
            console.log('a user connected');
            io.emit('user join', {for: 'everyone'});
            socket.on('disconnect', function()
            {
            console.log('user disconnected');
            io.emit('user leave', {for: 'everyone'});
            });
            //Message in Serverlog
            //Message on Website / function(msg) var msg is the message the user typed
            socket.on('chat message', function(msg){
            console.log('user sent a message');
            //sends message to everyone
            io.emit('chat message', msg);
            });
        });

        // This will emit the event to all connected sockets
        /*
        io.emit('some event', 
        { 
        someProperty: 'some value', otherProperty: 'other value' 
        });
        */

        //Broadcast with message hi /Example
        /*
        io.on('connection', function(socket){
        socket.broadcast.emit('hi');
        });
        */
    }
}

module.exports = Server;