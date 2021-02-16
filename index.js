// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    const driver = [...drivers, name];
    return driver;
}

function prependDriver(name) {
    const driver = [name, ...drivers];
    return driver;
}

function removeLastDriver() {
    const driver = drivers.slice(0, -1);
    return driver;
}

function removeFirstDriver() {
    const driver = drivers.slice(1);
    return driver;
}