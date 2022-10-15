const EventEmitter = require("/events");
const emitter = new EventEmitter();

//register a listener
emitter.on('messageLogged', function () {
	console.log("Listener called")
})

//Raise an event
emitter.emit("messageLogged");