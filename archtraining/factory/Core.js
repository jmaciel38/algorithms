import createDatabaseConnection from './Database.js';
import createWebserver from './Webserver.js';

var createCore = (conf = {}) => {
  const DATABASE = conf.database || createDatabaseConnection();
  const WEBSERVER = conf.webserver || createWebserver();

  var start = () => {
    console.log('> [Core] Starting ...');
    DATABASE.start();
    WEBSERVER.start();
    console.log('> [Core] Starting done! System running!');
  }

  var stop = () => {
    console.log('> [Core] Stopping ...');
    WEBSERVER.stop();
    DATABASE.stop();
    console.log('> [Core] Stopping done!');
  }

  return {
    start,
    stop
  };
}

export default createCore;