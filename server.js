var express = require('express');
var {
    urlencoded,
    json,
    static
} = express;
var {
    join
} = require('path');
var app = express();

app.use(urlencoded({
    extended: true
}));
app.use(json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

var pathPublic = join(__dirname + "/public");
app.use(static(pathPublic));

app.listen(process.env.port || 8080, () => {
    console.log('express app listening on port 8080');
});