var fs = require('fs');

var path = require('path');

fs.readdir(process.argv[2], (err, list) =>
{
 list.forEach((j) =>
 {
if (path.extname(j) === '.' + process.argv[3])
{
console.log(j);
}
});
});