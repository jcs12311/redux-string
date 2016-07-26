var fs = require('fs');
var template = require('es6-template-strings');

fs.readFile('./tmp.js', 'utf-8',function(err, data){
	if(!err){
		console.log(template(data, {fnName: 'fn', varA: 'cat'}));
	}
})