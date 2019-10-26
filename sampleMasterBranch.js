// testing for master branching


var chalk = require('chalk');

var error = chalk.bold.red;
var warning = chalk.keyword('orange');

console.log(error('Error'));
console.log(warning('Warning'));
