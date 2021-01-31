$(function () 
{
    var socket = io();

    //User join event
    socket.on('user join', function(msg)
    {
      $('#messages').append($('<li id="user-join">').text
      ('New User joined the Server'));
    });

    //user leave event
    socket.on('user leave', function(msg)
    {
      $('#messages').append($('<li id="user-left">').text
      ('User left the Server'));
    });
    
    //If you press the send button / if you send something than:
    $('form').submit(function(e)
    {
      //don't link on new page (against reloading the pace. Important!)
      e.preventDefault();
      //Sends a chat message to the server / $('#m').val() is the content
      socket.emit('chat message', $('#m').val());
      //sets the input field to nothing = ''
      $('#m').val('');
      //for closing the event
      return false;
    });

    //send messages
    socket.on('chat message', function(msg)
    {
      $('#messages').append($('<li>').text(msg));
    });

});