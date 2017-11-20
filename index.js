// Write your solution here!

const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
	drivers.push(name)
}

function destructivelyPrependDriver(name) {
	drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
	drivers.pop()
}

function destructivelyRemoveFirstDriver() {
	drivers.shift()
}

function appendDriver(name) {
	let returnArray = drivers.slice()
	returnArray.push(name)
	return returnArray
}

function prependDriver(name) {
	let returnArray = drivers.slice()
	returnArray.unshift(name)
	return returnArray
}

function removeLastDriver() {
	let returnArray = drivers.slice()
	returnArray.pop()
	return returnArray
}

function removeFirstDriver() {
	let returnArray = drivers.slice()
	returnArray.shift()
	return returnArray
}
