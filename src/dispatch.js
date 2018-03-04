const dispatch = (type, target, data = {}) => {
  if (typeof document !== 'undefined') {
    const detail = Object.assign({}, { target: target }, data, document.defaultView);
    // ({ foo: 'bar' }, doc.defaultView);
    document.dispatchEvent(document.defaultView.CustomEvent(type, detail));
  }
};
export default dispatch;
