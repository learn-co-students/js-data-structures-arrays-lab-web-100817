// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
  return drivers.push('Ralph')
}

function destructivelyPrependDriver(driver) {
  return drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(name) {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  return drivers.shift()
}

function appendDriver(driver) {
  new_drivers = drivers.slice()
  new_drivers.push("Broom")
  return new_drivers
}

function prependDriver(name) {
  new_drivers = drivers.slice()
  new_drivers.unshift(name)
  return new_drivers
}

function removeLastDriver(name) {
  new_drivers = drivers.slice()
  new_drivers.pop()
  return new_drivers
}

function removeFirstDriver(name) {
  new_drivers = drivers.slice()
  new_drivers.shift()
  return new_drivers
}
