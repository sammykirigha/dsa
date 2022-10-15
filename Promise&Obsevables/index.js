//promise are eager its called as soon as its defined
//promise return only single value
const myPromise = new Promise(resolve => {
	setTimeout(() => {
		resolve("dog")
	}, 1000)
})
myPromise.then(result => {
	console.log('promise', result);
})

//check Rxjs
//observables can return multiples values
// they behave like array
//it can be saved as a variable and called to unsubscribe e.g when you have an interval 
//they are lazy someone has to listen to them to make a call

const myObservable = new Rx.Observable(observer => {
	setTimeout(() => {
		observer.next("dog") 
		observer.next("cat")
		observer.next("bird")
	}, 100)
})

const subscription = myObservable.filter(result => result === 'bird').subscribe(result => {
	console.log("obsevable", result);
})

subscription.subscription();