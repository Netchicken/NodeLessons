//working with events
const EventEmitter = require("events");
const customEmitter = new EventEmitter(); //instance created

//when the event takes place..... yoiu can have as many on functions as you want
customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} with id:${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});
//result we want to show the user - this order matters you must on and then emit
//customEmitter.emit("response");
customEmitter.emit("response", "john", 34);
