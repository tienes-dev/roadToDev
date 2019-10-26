var chalk = require('chalk');

function Dog(name) {
	this.name = name;
}

Dog.prototype.sayHi = function() {
	console.log('My name is ' + chalk.greenBright.bold.underline(this.name));
};

module.exports = Dog;