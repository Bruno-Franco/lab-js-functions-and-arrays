// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
	return Math.max(n1, n2)
}

// Iteration 2 | Find the Longest Word
const words = [
	'mystery',
	'brother',
	'aviator',
	'crocodile',
	'pearl',
	'orchard',
	'crackpot',
]

function findLongestWord(arr) {
	let biggest = ''
	let temp = 0
	if (arr.length === 0) {
		return null
	}

	for (let i = 0; i < arr.length; i++) {
		let letterNum = arr[i].length
		if (letterNum > temp) {
			temp = letterNum
			biggest = arr[i]
		}
	}
	return biggest
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

function sumNumbers(arr) {
	if (arr.length === 0) {
		return 0
	} else if (arr.length === 1) {
		return arr[0]
	} else {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum
	}
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9]

function averageNumbers(arr) {
	if (arr.length === 0) {
		return 0
	} else {
		let avg = 0
		for (let i = 0; i < arr.length; i++) {
			avg += arr[i]
		}
		return avg / arr.length
	}
}

// Iteration 5 | Find Elements
const words2 = [
	'machine',
	'subset',
	'trouble',
	'starting',
	'matter',
	'eating',
	'truth',
	'disobedience',
]

function doesWordExist(arr, toFind) {
	if (arr.length === 0) {
		return null
	} else {
		return arr.includes(toFind)
	}
}
