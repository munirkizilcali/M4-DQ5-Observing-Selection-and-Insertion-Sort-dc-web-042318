function selectionSort(arr) {
	// your code here!
	// arr is an array of unsorted integers (i.e. [3, 5, 1])
	console.log(arr);

	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[i]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}
