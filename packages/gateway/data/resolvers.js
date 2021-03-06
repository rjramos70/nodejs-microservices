const axios = require('axios');
const { ServerDatabase: { port } } = require('../config/index'); 

const hostname = 'http://localhost';
const databaseURL = `${hostname}:${port}`;

const get = async path => 
    (await axios.get(`${databaseURL}/${path}`)).data.payload;

const post = async (path, body) => 
    (await axios.post(`${databaseURL}/${path}`, { ... body })).data.payload; 

module.exports = {
    Query: {
        mails: () => get('mails'),
        mail: (_, { id }) => get(`mails/${id}`)
    },
    Mutation: {
        mail: (_, args) => post('mails', args)
    }
};
