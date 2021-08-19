const validator = require('validator')
const chalk = require('chalk')

console.log(chalk.blue('hello world'));

const res = validator.isEmail('roop@gmail.com');
console.log(res);