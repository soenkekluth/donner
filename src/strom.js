import objectAssign from 'object-assign';

/**
 * parses the event object and creates a flat Object with all commonly used attributes like {target, currentTarget, type, ...data}
 *
 * @param {CustomEvent} event
 * @returns {Object} eventObject
 */
const strom = event => {
  const { type, target, currentTarget, detail } = event;
  return objectAssign(
    {},
    {
      type,
      target,
      currentTarget,
    },
    detail,
  );
};
export default strom;
