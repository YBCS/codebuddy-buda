// level {2}

// ## Level 2
// Write a function in Javascript to print the sum of the first n fibonacci numbers.

// **Input:** 6
// **Output:**
// ```
// 1 1 2 3 5 8
// 0 1 2 3 4 5 -> index
// Sum: 20
// ```

function fibSeq(num) {
	let prev = 0
	let curr = 1
	let ans = 1
	let next_val = 0
	// 6 
	for(let i = 0; i < num; i++) {
		next_val = prev + curr
		prev = curr
		curr = next_val
		ans += curr
	}
	return ans
}










