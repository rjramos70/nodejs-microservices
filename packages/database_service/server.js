const server = require('express')();
const bodyParser = require('body-parser');  // parse the JSon

const config = require('./config/index');   // get the all configurations
const { port } = config;    // get just the PORT configuration

server.use(bodyParser.json());

// include database connection
require('./dbutil/index')(config);

// including the 'get.js' routes
require('./routes/get')(server);

// incluing the 'post.js' routes
require('./routes/post')(server);

server.listen(port, () => console.log(`Database listening on port ${port}`));