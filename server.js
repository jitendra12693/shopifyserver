var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

//app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
//app.use(express.urlencoded({limit: '50mb'}));
module.exports = app;
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

require("./src/routes/product.routes")(app);
require("./src/routes/image.routes")(app);
