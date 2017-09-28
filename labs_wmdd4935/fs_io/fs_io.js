var fs = require('fs');
var nextstep = process.argv[2];
var file = fs.readFileSync(nextstep);
var contents = file.toString();
console.log(contents.split('\n').length - 1);