var mongoose = require('mongoose');
var express = require('express');
var app = express();

require('./config/database.js')(app, mongoose);
require('./config/express.js')(app, express);
require('./routes.js')(app);

app.listen(app.get('port'), function() {
    console.log("Express server listening on port %d in %s mode", app.get('port'), app.get('env'));
});

module.exports = app;
