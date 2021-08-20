const EventEmitter = require('events')

//create event
const event = new EventEmitter();

// // assign the eventhandler to an event
// event.on('hello_world', () => {
//     console.log('This is event listener');
// })

// // calling multiple event using one emit
// event.on('hello_world', () => {
//     console.log('This is second event listener');
// })
// event.on('hello_world', () => {
//     console.log('This is third event listener');
// })

// // Fire the event
// event.emit("hello_world")


event.on('checkstatus', (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
})

event.emit("checkstatus", 200, 'ok')