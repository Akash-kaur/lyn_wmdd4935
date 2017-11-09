var mymodule = require('./mymodule.js');
var directory = process.argv[2]  
var foo = process.argv[3];
mymodule(directory, foo, function(err, files) {
if (err) {
return console.error('error:', err);
}
 files.forEach(function(file) {
console.log(file);
});
});