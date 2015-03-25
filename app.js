var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    res.write(JSON.stringify({
        status: 'success',
        result: {
            hello: 'world'
        }
    }));

    res.end();
});

server.listen(process.env.PORT || 8080);
