const path = require('path');
const basePath = path.join(__dirname, '/pacakes');

module.exports = {
  apps : [
    // First application
    {
      name: 'Gateway',
      script: basePath + '/gateway/server.js',
      env: {
        PORT: 3001
      }
    },
    // Second application
    {
      name: 'DB service',
      script: basePath + '/database_service/server.js',
      env: {
        PORT: 4001
      }
    }
  ]
};
