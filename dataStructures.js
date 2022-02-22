// level {2}

// ### level 2:
// 1. Write a function to remove all even numbers from an Array.
// ```
// Input array: 
// [1, 3, 4, 6, 7, 8]
// ```
// ```
// Output should be array: [1, 3, 7]
// ```

let arr = [1, 3, 4, 6, 7, 8]
function que1(arr) {
	arr = arr.filter(a => (a % 2))
	return arr
}

// 2. Replace all the vowels in a string with uppercase vowels.
// ```
// Input string: 'Elie'
// ```
// ```
// Output should be string: 'ElIE'
// ```
let word = 'Elie'
function que2(word) {
	word = word.toUpperCase()
}


// 3. Write a function to find the maximum number in an array.
// ```
// Input array: [1, 3, 4, 6, 7, 8, 2, 5]
// ```
// ```
// Output should be a number: 8
// ```

let arr = [1, 3, 4, 6, 7, 8, 2, 5]
function que3(arr) {
	let max_num = -Infinity
	arr.map(num => {
		max_num = Math.max(max_num, num)
	})
	return max_num
}
// max_num