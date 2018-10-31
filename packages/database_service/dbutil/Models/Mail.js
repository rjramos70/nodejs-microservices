// we don't need the all mongoose, just the Schema
const { Schema } = require('mongoose');

// this schema contains all the attributes of Mail
const mailSchema = new Schema({
    subject: String,
    receiver: String,
    content: String
});

module.exports = mailSchema;
