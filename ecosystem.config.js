const path = require('path');
const basePath = path.join(__dirname, '/packages');

module.exports = {
  apps : [
    // First application
    {
      name: 'Gateway',
      script: basePath + '/gateway/server.js',
      watch: true, 
      env: {
        PORT: 3001,
        SERVICE_DB_PORT: 4001
      }
    },
    // Second application
    {
      name: 'DB service',
      script: basePath + '/database_service/server.js',
      watch: true,
      env: {
        PORT: 4001
      }
    }
  ]
};
// watch: true = PM2 is going to monitor everything that belongs to 
//               the 'script' variable. It means that the PM2 is going
//               to responsable to restart the application every time 
//               that the code has any change.
