function Rotate(arr, d) {
	let rotations = 1;
	let length = arr.length

	while (rotations <= d) {
		let last = arr[0];
		for (let i = 0; i < length - 1; i++){
			arr[i] = arr[i + 1];
		}
		arr[length - 1] = last;
		rotations++
	}

	return arr;
}

(
	() => {
		let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		let d = 3;
		console.log("Before", array);
		const afterRotation = Rotate(array, d)
		console.log("After", afterRotation);
	}
)()