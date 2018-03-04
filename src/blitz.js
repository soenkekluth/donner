const blitz = (target, type, handler) => {
  const node = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (Object.hasOwnProperty.apply(node, 'length')) {
    for (let i = 0, l = node.length; i < l; i++) {
      typeof node[i].addEventListener === 'function' && node.addEventListener(type, handler);
    }
  } else {
    node.addEventListener(type, handler);
  }
};
export default blitz;
