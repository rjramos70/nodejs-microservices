const { PORT } = process.env;

module.exports = {
    port: PORT || 4000,
    // mLab MongoDB
    mongoURI: 'mongodb://db_user:db_user2018@ds143683.mlab.com:43683/microservice_db'
    // Local MongoDB
    // mongoURI: 'mongodb://:@localhost:27017/microservice_db'    
};