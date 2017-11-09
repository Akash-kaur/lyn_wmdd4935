var concat= require('concat-stream');
var http = require('http');
var foo = process.argv[2];

http.get(foo, function(response) {
response.setEncoding('utf-8');
response.pipe(concat(function(data){
console.log(data.length);
console.log(data);
}));
});