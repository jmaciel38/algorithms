import createCore from '../Core.js';

var createMock = () => {
  var start = () => {
    console.log('[Mock] ...');
  }
  var stop = () => {
    console.log('[Mock] ...');
  }

  return {
    start,
    stop
  }
}
describe('Core quando importado', () => {
  test('Deve ter os métodos start e stop', () => {
    const CORE = createCore();
    expect(CORE).toHaveProperty('start');
    expect(CORE).toHaveProperty('stop');
  });
});

describe('Core quando inicializado', () => {
  test('Não deve retornar erros', () => {
    const DATABASEMOCK = createMock();
    const WEBSERVERMOCK = createMock();
    const CORE = createCore({
      database: DATABASEMOCK,
      webserver: WEBSERVERMOCK
    });
    expect(() => {
      CORE.start();
    }).not.toThrow();
  });
});