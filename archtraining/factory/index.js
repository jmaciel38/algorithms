import createCore from './Core.js';

const CORE = createCore();

try {
  CORE.start();
  CORE.stop();
} catch (error) {
  console.log('[index] Uncaught error!');
  console.log(error);
}

