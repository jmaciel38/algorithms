var createDatabaseConnection = () => {
  var start = () => {
    console.log('> [Database] Starting ...');
    console.log('> [Database] Connecting to db ...');
    console.log('> [Database] Running migrations ...');
    console.log('> [Database] Starting done!');
    throw new Error('Connection failed');
  }

  var stop = () => {
    console.log('> [Database] Stopping ...');
    console.log('> [Database] Closing db connection ...');
    console.log('> [Database] Stopping done!');
  }

  return {
    start,
    stop
  };
}

export default createDatabaseConnection;