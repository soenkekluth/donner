/**
 * dispatch an Event with an optional data object from a DOM Node or any EventTarget
 *
 * @param {EventTarget} element
 * @param {string} type
 * @param {any} [data={}]
 */
const donner = (element, type, data = {}) => {
  const event = new CustomEvent(type, { detail: data });
  element.dispatchEvent(event);
};
export default donner;
