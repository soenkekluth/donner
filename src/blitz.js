/**
 * listen to events dispatched by a DOM Node or any EventTarget
 *
 * @param {EventTarget} target
 * @param {string} type
 * @param {function} handler
 */
const blitz = (target, type, handler) => {
  const node = typeof target === 'string' ? document.querySelectorAll(target) : target;

  if (node instanceof EventTarget || typeof node.addEventListener === 'function') {
    node.addEventListener(type, handler);
  }

  if (node instanceof NodeList || !isNaN(node.length)) {
    for (let i = 0, l = node.length; i < l; i++) {
      if (node[i] && typeof node[i].addEventListener === 'function') {
        node[i].addEventListener(type, handler);
      }
    }
  }
};

export default blitz;
