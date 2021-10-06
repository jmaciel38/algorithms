var createWebserver = () => {
  var start = () => {
    console.log('> [Webserver] Starting ...');
    console.log('> [Webserver] Waiting for port to be available ...');
    console.log('> [Webserver] Starting done!');
  }

  var stop = () => {
    console.log('> [Webserver] Stopping ...');
    console.log('> [Webserver] Gracefully waiting for all clients ...');
    console.log('> [Webserver] Closing all ports ...');
    console.log('> [Webserver] Stopping done!');
  }

  return {
    start,
    stop
  };
}

export default createWebserver;