var express = require('express');
var app = express();
var router = require('./router/main')(app);
var WebsocketServer = require('ws').Server;
var wss = new WebsocketServer({ port: 3501 });

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
    console.log("Express server has started on port 3000!!!!");
    app.use(express.static('public'));


    wss.on("connection", function(ws) {
        ws.send("ㅎㅇ 서버에 접속하셨음~");
        ws.on("message", function(message) {
            console.log("받은 메시지 " + message);
        });
    });

});