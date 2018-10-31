const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

// mails: [Mail] --> return a Array of Mail
// mail(subject: String!, receiver: String!): Mail --> return an object Mail
const typeDefs = `
    type Query {
        mails: [Mail]           
        mail(subject: String!, receiver: String!): Mail
    }

    type Mutation {
        mail(subject: String!, receiver: String!, content: String!): Mail
    }

    type Mail {
        subject: String
        receiver: String
        content: String
        _id: String
    }
`;

// If you change the 'typeDefs' variable name, in the module.exports you have 
// to do like:
// const xpto = `type Query { hey : String! }`;
// module.exports = makeExecutableSchema({ typeDefs: xpto, resolvers });

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
});