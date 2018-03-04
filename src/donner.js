// const createEvent = () => {
//   const event = document.createEvent('Event');
//   event.initEvent(type, true, true);
//   const keys = Object.keys(data);
//   for (let i = 0, l = keys.length; i < l; i++) {
//     const key = keys[i];
//     event[key] = data[key];
//   }
// };

const donner = (element, type, data = {}) => {
  const event = new CustomEvent(type, { data });
  element.dispatchEvent(event);
};

export default donner;

// // add an appropriate event listener
// obj.addEventListener('cat', function(e) {
//   process(e.detail);
// });

// // create and dispatch the event
// var event = new CustomEvent('cat', {
//   detail: {
//     hazcheeseburger: true,
//   },
// });
// obj.dispatchEvent(event);
