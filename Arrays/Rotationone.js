function Rotate(arr, d) {
	let n = arr.length;

	let temp = [];
	temp.length = n;

	let k = 0;

	for (let i = d; i < n; i++){
		temp[k] = arr[i];
		k++;
	}

	for (let i = 0; i < d; i++){
		temp[k] = arr[i]
		k++
	}

	for (let i = 0; i < n; i++){
		arr[i] = temp[i]
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