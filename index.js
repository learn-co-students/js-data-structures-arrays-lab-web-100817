// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name)
};

function destructivelyPrependDriver(name){
  return drivers.unshift(name)
};

function destructivelyRemoveLastDriver(){
  return drivers.pop()
};

function destructivelyRemoveFirstDriver(){
  return drivers.shift()
};

function appendDriver(name){
  const allDrivers = [...drivers,name];
  return allDrivers;
};

function prependDriver(name){
  const allDrivers = [name, ...drivers];
  return allDrivers;
};

function removeFirstDriver(){
  return drivers.slice(1);
};

function removeLastDriver(){
  return drivers.slice(0, drivers.length-1);
};
