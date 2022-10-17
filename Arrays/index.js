//Question 1. map vs foreach
// const array = [2, 3, 4, 5, 7]

// const mapResult = array.map((arr) => {
// 	return arr + 2
// })

// console.log(mapResult, array);

// const forEachResult = array.forEach((arr, i) => {
// 	arr[i] = arr * 2
// 	return arr[i]
// })

// console.log(forEachResult, array);

// question 2. null vs undefined
// undefined => declared but the value is not initialized
//null => is an actual value of type object

//Question 3: Explain event delegation
//without adding event listener to each specific list we add to a parent and use it to click ather list items
// document.querySelector("#products").addEventListener("click", (event) => {
// 	console.log(event); //event will log pointerEvent
// 	if (event.target.tagName === "LI") {
// 		window.location.href += "#" + event.target.id
// 	}
// })

// Question 4: Flatten the array
let arr = [
	[1, 2],
	[3, 4],
	[5, 6, [7, [8]], 9],
	[10, 11, 12]
]

// let flattenArray = [].concat(...arr)
// let flattenArray = arr.flat(2)

function customFlat(array, depth = 1) {
	let result = [];
	array.forEach((arr) => {
		if (Array.isArray(arr) && depth > 0) {
			result.push(...customFlat(arr, depth - 1))
		} else {
			result.push(arr)
		}
	})
	return result
}

console.log("<<<<<<>>>>>", customFlat(arr, 3))

//Question 5 setTimeout output

function a() {
	for (var i = 0; i < 3; i++){
		setTimeout(function log() {
			console.log(i); //What is logged
		}, i * 1000)
	}
}

// i = 3
// i = 3
// i = 3

a()