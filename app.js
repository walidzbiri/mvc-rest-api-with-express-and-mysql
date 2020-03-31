// Import express
let express = require('express');
//Import routes
let apiRoutes=require("./api-routes");
// Import Body parser
let bodyParser = require('body-parser');
var cors = require('cors');

// Initialize the app
let app = express();
app.use(cors())

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Setup server port
var port = 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World'));

app.use('/',apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Rest on port " + port);
});