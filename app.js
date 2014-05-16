var restify = require('restify'),
    express = require('express'),
    userSave = require('save')('user'),
    url = require('url'),
    exec = require('child_process').exec,
    formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs   = require('fs-extra'),
    assert = require('assert'),
    mysql = require('mysql');
    var count = 0;

    var app = express();
    var server = require('http').createServer(app);
    var port = 3535;
    
    app.set('views', __dirname + '/tpl');
    app.set('view engine', 'jade');
    app.engine('jade', require('jade').__express);
    app.get('/', function (req, res) {
            res.render("page");
    });
    app.use(express.static(__dirname + '/public'));
    
    var io = require('socket.io').listen(app.listen(port));
    io.sockets.on('connection', function(socket) {
            socket.emit('message', { 'message' : 'welcome to the chat', 'username' : 'server'});
            socket.on('send', function (data) {
                console.log(data);
                    io.sockets.emit('message', data);
            });
    });
    //server.listen(7777);
    
/*app.get('/', function (req, res) {
        res.sendfile(__dirname + '/timeclient.html');
});

io.sockets.on('connection', function (socket) {

        socket.emit('startsocket','welcome to timeserver');

        socket.on('timestart', function (data) {
            if(data=="start")
            {
                 startSendTime();
            }
        });

        function startSendTime()
        {
            var newDate = new Date();
            timeNow = newDate.getHours()+":"+newDate.getMinutes()+":"+newDate.getSeconds();
            socket.emit('timenow',timeNow);
            setTimeout(startSendTime, 5000);
        }
});*/

//var server = restify.createServer({ name: 'feed-biz-api' });

/*var connection = mysql.createConnection({host: '192.168.1.6', user: 'root', password: 'root', database: 'codeigniter_buser'});
connection.connect();
connection.query('Select * FROM ebay_sites', function(err, results) {
   results.forEach(function(sites) {
       console.log(sites.name); 
   })
});
connection.end();*/
/*server.pre(function foo2(req, res, next) {
    console.log('pre' + count);
    console.log('pre' + count);
    next();
});

server.use(function foo(req, res, next) {
    console.log(count);
    count++;
    console.log(count);
    next();
});
*/
/*server.get('/foo/:id', function (req, res, next) {
   next('foo2');
});*/
/*
server.get({
    name: 'foo2',
    path: '/foo/:id'
}, function (req, res, next) {
   assert.equal(count, 1);
   res.send('hello ' + count + req.params.id);
   next();
});*/

/*server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});*/