var Parser = require('./parser');

var fs = require('fs');

fs.readFile('example_log.txt', function(err,data){
    if(err) throw err;

    var text = data.toString();

    var parser = new Parser();

    console.log(parser.parse(text));
});