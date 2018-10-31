// Mocking an Array of Mails
const mockMails = [
    {
        subject: 'My first Email',
        receiver: 'test@test.com',
        content: 'Hello world'
    },
    {
        subject: 'My second Email',
        receiver: 'test@test.com',
        content: 'Hello world'
    },
    {
        subject: 'My third Email',
        receiver: 'test@test.com',
        content: 'Hello world'
    }
];

module.exports = {
    Query: {
        mails: () => mockMails,
        mail: (_, args) => mockMails[0]
    },
    Mutation: {
        mail: (_, args) => {
            mockMails[0] = args;
            return args;
        }
    }
};
