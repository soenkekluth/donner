const { JSDOM } = require('jsdom');

const { donner, blitz, strom, dispatch } = require('../lib/donner');

// The exact same test using async/await
describe('Gewitter should blitz and donner', () => {
  beforeAll(async () => {
    const dom = await JSDOM.fromFile('./test/test.html', {
      pretendToBeVisual: true,
      contentType: 'text/html',
      userAgent: 'testi/9000',
    });
    global.window = dom.window;
    global.document = dom.window.document;
    global.EventTarget = dom.window.EventTarget;
    global.NodeList = dom.window.NodeList;
    global.CustomEvent = dom.window.CustomEvent;
  });

  it('blitz type should be as donnered type', async () => {
    // expect.assertions(3);

    const sender = document.querySelector('#sender');
    // const rec = document.querySelector('#receiver');

    blitz(sender, 'foo', evt => {
      expect(evt.type).toEqual('foo');
    });

    donner(sender, 'foo');
  });

  it('blitz data should be donnered data', async () => {
    // expect.assertions(3);

    const sender = document.querySelector('#sender');
    // const rec = document.querySelector('#receiver');

    blitz(sender, 'junk', e => {
      const evt = strom(e);
      expect(evt.junk).toEqual('bar');
      expect(evt.type).toEqual('junk');
      expect(evt.target).toEqual(sender);
    });

    donner(sender, 'junk', {
      junk: 'bar',
    });
  });
});
