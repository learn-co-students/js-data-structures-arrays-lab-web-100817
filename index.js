// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  return  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.splice( 0, 0, name)
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  newArray= drivers.slice()
  newArray.push(name)
  return newArray
}

function prependDriver(name){
  newArray = drivers.slice()
  newArray.splice( 0, 0, name)
  return newArray
}

function removeLastDriver(){
  newArray = drivers.slice(0,-1)
  return newArray
}

function removeFirstDriver(){
  newArray = drivers.slice(1)
  return newArray
}
