var http = require('http');
var url = require('url');
var portNumber = process.argv[2];
var server;
server = http.createServer(function (request, response) {
var data = url.parse(request.url, true),
json;

switch(data.pathname) {
case '/api/parsetime':
var date = new Date(data.query.iso);
json = {
hour: date.getHours(),
minute: date.getMinutes(),
second: date.getSeconds()
};
break;
case '/api/unixtime':
json = {
unixtime: (new Date(data.query.iso)).getTime()
};
break;
}
if (json) {
response.writeHead(200, { 'Content': 'application/json' });
response.end(JSON.stringify(json));
} else {
response.writeHead(404);
response.end();
}
});
server.listen(portNumber);