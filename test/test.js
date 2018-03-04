const test = require('ava');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const donner = require('../lib/donner');
console.log('donner', donner, donner.donner);

test.cb('all document states should pass', t => {
  JSDOM.fromFile('./test/test.html', {
    pretendToBeVisual: true,
    contentType: 'text/html',
    userAgent: 'testi/9000',
  }).then(dom => {
    global.window = dom.window;
    global.document = dom.window.document;
    console.log('donner', donner);

    const { blitz, donner } = donner;
    const btn = document.querySelector('#button1');
    if (btn) {
      blitz(btn, 'hello', e => {
        console.log('e', e);
        t.pass();
        t.end();
      });
      donner(btn, 'hello', { foo: 'bar' });
    }
  });
});
