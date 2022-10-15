class EventEmitter {
	listeners = {};

	addListener(event, fn) {
		this.listeners[event] = this.listeners[event] || [];
		this.listeners[event].push(fn);
		return this;
	}
    
	//an alias to addListener
	on(event, fn) {
		return this.addListener(event, fn)
	}

	removeListener(event, fn) {
		let listener = this.listeners[event]
		if (!listener) return this;
		for (let i = listener.length; i > 0; i--){
			if (listener[i] === fn) {
				listener.splice(i, 1);
				break;
			}
		}
		return this;
	}

	off(event, fn) {
		return this.removeListener(event, fn)
	}

	once(eventName, fn) {
		this.listeners[eventName] = this.listeners[eventName] || [];
		const onceWrapper = () => {
			fn();
			this.off(eventName, onceWrapper)
		}
		this.addListener[eventName].push(onceWrapper)
		return this;
	}

	emit(eventName, ...args) {
		let fns = this.listeners[eventName];
		if (!fns) return false;
		fns.forEach((f) => {
			f(...args)
		})
		return true;
	}
}