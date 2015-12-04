Tail = require('tail').Tail;
module.exports = {
  server_log: function (req, res) {
    var socket = req.socket;
    var io = sails.io;

    // emit to all sockets (aka publish)
    // including yourself
    io.sockets.emit('messageName', {thisIs: 'theMessage'});
    tail = new Tail("/Users/daniel/Projects/acid/mayday-requests/log/development.log");
    tail.on("line", function(data) {
      io.sockets.emit("server_log",{line: data});
    });
    return res.view("server_log");
  },
  application_log: function (req, res) {
    return res.view("application_log");
  }
}