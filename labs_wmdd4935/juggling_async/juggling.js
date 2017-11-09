var http = require('http');
var concatStream = require('concat-stream');
var url = process.argv.slice(2),
result = [], resultCount = 0;
url.forEach((urls, i) => {
http.get(urls, (res) => {
res.setEncoding('utf8');
res.pipe(concatStream((data) => {
result[i] = data;
resultCount++;
if (resultCount === url.length) {
result.forEach((results) => {
console.log(results);
});
}
}));    
});
});