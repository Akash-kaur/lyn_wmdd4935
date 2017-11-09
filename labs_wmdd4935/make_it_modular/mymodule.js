var fs = require('fs');
var path = require('path');
module.exports = function(directory, foo, callback) {
foo = '.' + foo;
fs.readdir(directory, function (err, files) {  
if (err) {
 return callback(err)
};

var filterList = [];
files.forEach(function(file) {
if (path.extname(file) === foo) {
filterList.push(file);
};
});
return callback(null, filterList);
});
};