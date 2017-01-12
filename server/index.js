var express		= require('express');
var app			= express();

var port		= 8080;

app.use(express.static('dist'));

app.use('/api/employees',		require('./modules/employees'))

console.log('App server starting');

var server = app.listen(port, function(){
	console.log('App listening on http://localhost: '+ port);
});


exports.closeServer = function(){
	server.close();
};