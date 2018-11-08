const server = require('express')();
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');  // parse the JSon

const { port } = require('./config/index');
const schema = require('./data/schema');


server
    .use(bodyParser.json())
    .use('/graphql', graphqlExpress({ schema }))
    .use('/gq', graphiqlExpress({ endpointURL : '/graphql'}))
    .listen(port, () => console.log(`Gateway listening on port: ${port}`));