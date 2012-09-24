var express = require('express'),
    app;

exports.createServer = function () {
    app = express();
    app.set('view engine', 'ejs');
    app.set('views', process.env.PWD + '/server/views');
    console.log(__dirname);
    app.use(express.static(__dirname + '/limaclient'));
    app.use(express.static(process.env.PWD + '/client'));

    app.get('/', function (req, res) {
        res.render('index');
    });

    return app;
};

exports.listen = function (customPort) {
    var port = process.env.port || customPort || 3000;
    app.listen(port);
    console.log("Lima server running on port", port);
};
